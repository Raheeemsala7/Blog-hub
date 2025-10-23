

"use client";
import {
    BookOpen,
    ChevronDownIcon,
    HomeIcon,
    LayoutDashboard,
    Loader2,
    LogOutIcon,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useTransition } from "react";

interface IProps {
    name: string;
    email: string;
    image: string;
    isAdmin: boolean
}
export default function UserData({ name, email, image, isAdmin }: IProps) {
    const [isPending, setTransition] = useTransition()


    const router = useRouter()
    function signOut() {

        setTransition(async () => {
            const supabase = await createClient()
            await supabase.auth.signOut()
            router.push("/");
            router.refresh()
            toast.success("Singed out Successfully");
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-auto w-fit !p-0 m-0 hover:!bg-transparent">
                    <Avatar className="h-8 w-fit rounded-lg ">
                        <AvatarImage src={image ?? `https://avatar.vercel.sh/${email}`} alt={name} />
                        <AvatarFallback className="rounded-lg">
                            {name && name.length > 0
                                ? name.charAt(0).toUpperCase()
                                : email.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <ChevronDownIcon
                        size={16}
                        className="opacity-60"
                        aria-hidden="true"
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-64">
                <DropdownMenuLabel className="flex min-w-0 flex-col">
                    <span className="text-foreground truncate text-sm font-medium">
                        {name}
                    </span>
                    <span className="text-muted-foreground truncate text-xs font-normal">
                        {email}
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild >
                        <Link href="/">
                            <HomeIcon size={16} />
                            <span>Home</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href={"/learning"}>
                            <BookOpen size={16} />
                            <span>My courses</span>
                        </Link>
                    </DropdownMenuItem>
                    {isAdmin && (
                        <DropdownMenuItem asChild>
                            <Link href={"/admin"}>
                                <LayoutDashboard size={16} />
                                <span>Dashboard</span>
                            </Link>
                        </DropdownMenuItem>
                    )}

                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut} disabled={isPending}>
                    {isPending ?
                        <>
                        <Loader2  size={16} className="opacity-60 animate-spin" />
                        <span>Logouting...</span>
                        </>
                        :
                        <>
                            <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
                            <span>Logout</span>
                        </>
                    }
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
