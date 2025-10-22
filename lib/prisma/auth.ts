import { User, UserRole } from "@/app/generated/prisma"
import prisma from "@/utils/prisma/client"



export const signupAction = async (user: User) => {

    const newUser = await prisma.user.create({
        data: {
            id: user.id,
            email: user.email,
            name: "DDD",
            password: null,
            jobTitle: null,
            avatar_url: user.avatar_url ? user.avatar_url : "",
            role: "READER" as UserRole,
            created_at: new Date(),
            updated_at: new Date(),
        },
    })

    return newUser
}
export const logInAction = async (email: string) => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email: email,
        }
    })
    return existingUser
}



