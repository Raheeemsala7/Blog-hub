
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import RegisterForm from "@/components/auth/RegisterForm";




const SignUpForm = () => {

    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     setLoading(true);
    //     setError(null);

    //     const formData = new FormData(event.currentTarget);
    //     const result = await signup(formData)


    //     if (result.status === "success") {
    //         router.push("/");
    //     } else {
    //         setError(result.status);
    //     }

    //     setLoading(false);
    // };
    return (

        // <div>
        //     <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 pt-24">
        //         <div>
        //             <label className="block text-sm font-medium text-gray-200">
        //                 Username
        //             </label>
        //             <input
        //                 type="text"
        //                 placeholder="Username"
        //                 id="username"
        //                 name="username"
        //                 className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
        //             />
        //         </div>
        //         <div>
        //             <label className="block text-sm font-medium text-gray-200">
        //                 Email
        //             </label>
        //             <input
        //                 type="email"
        //                 placeholder="Email"
        //                 id="Email"
        //                 name="email"
        //                 className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
        //             />
        //         </div>
        //         <div>
        //             <label className="block text-sm font-medium text-gray-200">
        //                 Password
        //             </label>
        //             <input
        //                 type="password"
        //                 placeholder="Password"
        //                 name="password"
        //                 id="password"
        //                 className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
        //             />
        //         </div>
        //         <div className="mt-4">
        //             <AuthButton type="Sign up" loading={loading} />
        //         </div>
        //         {error && <p className="text-red-500">{error}</p>}
        //     </form>
        // </div>

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