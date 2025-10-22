
import {  Clock, GithubIcon, LinkedinIcon, TwitterIcon, User } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800&h=600&fit=crop",
    category: "Travel",
    categoryColor: "bg-yellow-600",
    title: "Journey Through the Desert Oasis",
    description: "Embark on a captivating adventure through Sahara, from ancient cities to bustling markets. An",
    author: "Alex Johnson",
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    category: "Lifestyle",
    categoryColor: "bg-blue-600",
    title: "The Art of Mindful Living",
    description: "Discover simple yet effective ways to bring calm into your daily routine with these simple yet profound mindfulness.",
    author: "Rob Williams",
    timeAgo: "1 day ago"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    category: "Technology",
    categoryColor: "bg-red-600",
    title: "Future of AI: Beyond the Horizon",
    description: "Explore the latest developments in artificial intelligence and its potential impact on society, work, and",
    author: "Charlie Brown",
    timeAgo: "3 days ago"
  }
];


export default async function Home() {
  // const users = await prisma.user.findMany();
  return (
    <>


      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-amber-900/40 via-red-900/30 to-orange-950/40 rounded-3xl p-12 md:p-20 text-center backdrop-blur-sm border border-amber-900/20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Unlock Your Stories with Blog Hub
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Dive into a world of knowledge, creativity, and connection. Read, write, and share your passion with a thriving community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/explore"} className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Articles
              </Link>
              <Link href={"/signup"} className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black font-semibold rounded-lg transition-all duration-300">
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="group bg-card rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-800 hover:border-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <span className={`inline-block px-3 py-1 bg-secondary-foreground text-white dark:text-black text-sm font-semibold rounded-full mb-3`}>
                    {article.category}
                  </span>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>By {article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={"/explore"} className="px-8 py-3 bg-primary text-white rounded-lg font-semibold transition-colors">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
      {/* Featured Articles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="group bg-card rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-800 hover:border-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <span className={`inline-block px-3 py-1 bg-secondary-foreground text-white dark:text-black text-sm font-semibold rounded-full mb-3`}>
                    {article.category}
                  </span>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>By {article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={"/explore"} className="px-8 py-3 bg-primary text-white rounded-lg font-semibold transition-colors">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-3xl p-12 text-center border border-red-900/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Writing Journey Today</h2>
            <p className="text-lg text-gray-300 mb-8">
              Join our community of passionate writers and readers. Share your voice with the world.
            </p>
            <button className="px-8 py-4 bg-primary rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Create Your First Post
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">


          <div className="flex justify-between">
            <div className=" text-foreground text-sm">
              <p>&copy; 2025 Blog Hub. All rights reserved.</p>
            </div>

            <nav>
              <ul className="flex gap-4">
                <li>
                  <Link  href={"#"}>
                    <GithubIcon className="size-6" />
                  </Link>
                </li>
                <li>
                <Link href={"#"}>
                    <TwitterIcon className="size-6" />
                  
                </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <LinkedinIcon className="size-6" />
                  </Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </footer>

    </>

  );
}
