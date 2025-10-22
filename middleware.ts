import { type NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
    const response = NextResponse.next()

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value
                },
                set(name: string, value: string, options: any) {
                    response.cookies.set({ name, value, ...options })
                },
                remove(name: string, options: any) {
                    response.cookies.delete({ name, ...options })
                },
            },
        }
    )

    const {
        data: { user },
    } = await supabase.auth.getUser()

    const pathname = request.nextUrl.pathname

    // ✅ لو المستخدم داخل login أو register وهو مسجل دخول بالفعل
    if (user && (pathname.startsWith('/login') || pathname.startsWith('/register'))) {
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = '/' // أو "/dashboard"
        return NextResponse.redirect(redirectUrl)
    }

    // ✅ العكس: لو مش مسجل وبيحاول يدخل صفحات محمية
    if (!user && pathname.startsWith('/admin')) {
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = '/login'
        return NextResponse.redirect(redirectUrl)
    }

    return response
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
