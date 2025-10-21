

import LoginForm from '@/components/auth/LoginForm';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';




export default function LoginPage() {

    return (
        <Card className="w-full max-w-md bg-slate-800/90 border-slate-700 backdrop-blur-sm">
            <CardHeader className="text-center space-y-2">
                <CardTitle className="text-3xl font-bold text-white">
                    Welcome Back!
                </CardTitle>
                <CardDescription className="text-gray-300">
                    Sign in to your Blog Hub account to continue writing and exploring.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <LoginForm />
            </CardContent>
        </Card>
    )
}