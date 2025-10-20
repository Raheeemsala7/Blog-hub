"use client"
import { login } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";


const AuthButton = ({
    type,
    loading,
}: {
    type: "login" | "Sign up" | "Reset Password" | "Forgot Password";
    loading: boolean;
}) => {
    return (
        <button
            disabled={loading}
            type="submit"
            className={`${loading ? "bg-gray-600" : "bg-blue-600"
                } rounded-md w-full px-12 py-3 text-sm font-medium text-white`}
        >
            {loading ? "Loading..." : type}
        </button>
    );
};

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await login(formData)


        // if (result.status === "success") {
        //     router.push("/");
        // } else {
        //     setError(result.status);
        // }

        setLoading(false);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 pt-24">


                <div>
                    <label className="block text-sm font-medium text-gray-200">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="Email"
                        name="email"
                        className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-200">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
                    />
                </div>
                <div className="mt-4">
                    <AuthButton type="login" loading={loading} />
                </div>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    )
}