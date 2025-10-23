'use server'

import { revalidatePath } from 'next/cache'

import { createClient } from '@/utils/supabase/server'
import { logInAction, signupAction } from '@/lib/prisma/auth'
import { UserRole } from '@/app/generated/prisma'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signupToSupabaseAction(formData: FormData) {

    try {
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

        console.log(data)

        if (data?.user) {
            const user = data.user
            const prismaUser = {
                id: user.id,
                email: user.email ?? credentials.email,
                name: user.user_metadata?.name as string || credentials.username as string,
                password: null,
                jobTitle: null,
                avatar_url: null,
                role: "READER" as UserRole,
                created_at: new Date(),
                updated_at: new Date(),
            }
            await signupAction(prismaUser)
        }

        revalidatePath('/', 'layout')
        return { status: "success", message: "User signed up successfully", user: data.user }
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error " + error)
            return {
                status: "error",
                message: error.message,
                user: null
            }
        }
        return {
            status: "error",
            message: "Unknown error occurred",
            user: null
        }
    }


}


export async function loginToSupabaseAction(formData: FormData) {
    try {
        const supabase = await createClient()


        const credentials = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        }

        const { error, data } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
        })
        if (error) {
            console.log("Error " + error)
            console.log("data " + data.session)

            if (error.message === "Email not confirmed") {
                return {
                    status: "error",
                    message: "Email not confirmed, please check your email",
                    user: null
                }
            }
            return {
                status: "error",
                message: error.message,
                user: null
            }
        }

        console.log(data)

        if (data?.user) {
            const user = data.user
            const emailUser = user.email ?? credentials.email;
            await logInAction(emailUser)
        }

        return { status: "success", message: "User signed up successfully", user: data.user }
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error " + error)
            return {
                status: "error",
                message: error.message,
                user: null
            }
        }
        return {
            status: "error",
            message: "Unknown error occurred",
            user: null
        }
    }
}


export const signInWithOAuthGoogle = async () => {

    try {
        const origin = (await headers()).get("origin")
        const redirectTo = `${origin}/auth/v1/callback`

        const supbase = await createClient()

        const { data } = await supbase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo,
            }
        })
        if (data.url) {
            redirect(data.url)
        }

    } catch (error) {

        redirect("/error")
    }



}