import UserCard from "@/components/userCard";
import prisma from "@/utils/prisma/client";
import { BookOpen, PenLine } from "lucide-react";


export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <>


<section id="hero" className="pt-24 pb-20 relative overflow-hidden section-clickable">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-[#f0fdfa] dark:from-[#0F172A] dark:via-secondary dark:to-[#0F172A]"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#2563eb1a] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#14b8a61a] rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight" >
                            Join the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#14B8A6]" >tech writing</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto" >
                            Create, publish, and discover cutting-edge technology articles. Connect with a community of passionate writers and readers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold" >
                                <PenLine />
                                Start Writing
                            </button>
                            <button className="px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-secondary transition-all" >
                                <BookOpen />
                                Explore Articles
                            </button>
                        </div>
                    </div>
                </div>
            </section>

      <div className="min-h-screen  py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Tech News Hub Users
            </h1>
            <p className="mt-2 text-gray-600">
              {users.length} {users.length === 1 ? "user" : "users"} registered
            </p>
          </div>

          {users.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No users found</div>
              <p className="text-gray-400 mt-2">
                Run the seed script to populate the database
              </p>
            </div>
          )}
        </div>
      </div>

    </>

  );
}
