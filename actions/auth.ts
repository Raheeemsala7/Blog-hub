'use server'

import { revalidatePath } from 'next/cache'

import { createClient } from '@/utils/supabase/server'
import { signupAction } from '@/lib/prisma/auth'

export async function login(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.log(error)
    }

    // revalidatePath('/', 'layout')
    // redirect('/')
}

export async function signupToSupabaseAction(formData: FormData) {
    const supabase = await createClient()


    const credentials = {
        username: formData.get("name") as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error, data } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
            data: {
                name: credentials.username,
            }
        }
    })

    console.log(data)

    if (data?.user) {


        const user = data.user

        const prismaUser = {
            id: user.id,
            email: user.email,
            name: credentials.username,
        }


        // نحفظ المستخدم في قاعدة بياناتنا عبر Prisma
        await signupAction(prismaUser)

    }



    if (error) {
        console.log("Error " + error)
        console.log("data " + data.session)
        return {
            status: "error",
            message: error.message,
            user: null
        }
    } else if (data?.user?.identities?.length === 0) {
        return {
            status: "error",
            message: "User with this email already exists, please login",
            user: null
        }
    }

    revalidatePath('/', 'layout')
    return { status: "success", message: "User signed up successfully", user: data.user }
}