import { User } from "@/app/generated/prisma"
import prisma from "@/utils/prisma/client"



export const signupAction = async (user: User) => {

    const newUser = await prisma.user.create({
        data: {
            id: user.id,
            email: user.email,
            name: user.name,
            password: null,
            jobTitle: null,
            avatar_url: null,
            role: "READER", // أو "USER" لو enum عندك اسمه كده
            created_at: new Date(),
            updated_at: new Date(),
        },
    })

    return newUser
}



