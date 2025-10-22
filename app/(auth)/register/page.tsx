
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import RegisterForm from "@/components/auth/RegisterForm";




const SignUpForm = () => {
    return (
        <>
            {/* Sign In Card */}
            <Card className="w-full max-w-md bg-card backdrop-blur-sm">
                <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-3xl font-bold text-white">
                        Welcome Back!
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                        Sign in to your Blog Hub account to continue writing and exploring.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <RegisterForm />
                </CardContent>
            </Card>
        </>
    );
};

export default SignUpForm;