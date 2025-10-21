"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Calendar, Filter, User } from 'lucide-react'
import React, { useState } from 'react'

const ExplorePage = () => {
    const [category, setCategory] = useState('all');
    const [author, setAuthor] = useState('all');
    const [date, setDate] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

    const articles = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
            category: "Technology",
            categoryColor: "bg-orange-500",
            title: "The Future of AI in Content Creation",
            description: "Explore how artificial intelligence is revolutionizing the way we generate, optimize,",
            author: "Alex Johnson",
            date: "March 15, 2024"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
            category: "Lifestyle",
            categoryColor: "bg-yellow-600",
            title: "Mastering Productivity: Habits for Success",
            description: "Discover actionable strategies and daily habits employed by top performers to boost",
            author: "Maria Garcia",
            date: "March 18, 2024"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
            category: "Environment",
            categoryColor: "bg-teal-500",
            title: "Sustainable Living: A Guide to Eco-Friendly Homes",
            description: "Learn practical tips and innovative designs for transforming your living space into an",
            author: "David Lee",
            date: "March 05, 2024"
        }
    ];
    return (

        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Articles</h1>
                <p className="text-gray-400 text-lg max-w-3xl">
                    Dive into our diverse collection of articles, spanning technology, lifestyle, science, and more. Use the filters below to find exactly what you're looking for.
                </p>
            </div>

            {/* Filters Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="w-full flex items-center gap-2">
                                <label className="text-sm font-medium text-gray-300">Category:</label>
                                <Select value={category} onValueChange={setCategory}>
                                    <SelectTrigger className="w-full flex-1 text-white">
                                        <SelectValue placeholder="All Categories" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                                        <SelectItem value="all">All Categories</SelectItem>
                                        <SelectItem value="technology">Technology</SelectItem>
                                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                                        <SelectItem value="environment">Environment</SelectItem>
                                        <SelectItem value="science">Science</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="w-full flex items-center gap-2">
                                <label className="text-sm font-medium text-gray-300">Author:</label>
                                <Select  value={author} onValueChange={setAuthor}>
                                    <SelectTrigger className="w-full flex-1  text-white">
                                        <SelectValue placeholder="All Authors" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                                        <SelectItem value="all">All Authors</SelectItem>
                                        <SelectItem value="alex">Alex Johnson</SelectItem>
                                        <SelectItem value="maria">Maria Garcia</SelectItem>
                                        <SelectItem value="david">David Lee</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="w-full flex items-center gap-2">
                                <label className="text-sm font-medium text-gray-300">Date:</label>
                                <Select value={date} onValueChange={setDate}>
                                    <SelectTrigger className="w-full flex-1 text-white">
                                        <SelectValue placeholder="All Time" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                                        <SelectItem value="all">All Time</SelectItem>
                                        <SelectItem value="today">Today</SelectItem>
                                        <SelectItem value="week">This Week</SelectItem>
                                        <SelectItem value="month">This Month</SelectItem>
                                        <SelectItem value="year">This Year</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="w-full flex items-center gap-2">
                                <label className="text-sm font-medium text-gray-300">Sort By:</label>
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger className="w-full flex-1 text-white">
                                        <SelectValue placeholder="Newest" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                                        <SelectItem value="newest">Newest</SelectItem>
                                        <SelectItem value="oldest">Oldest</SelectItem>
                                        <SelectItem value="popular">Most Popular</SelectItem>
                                        <SelectItem value="trending">Trending</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <Button
                                className="w-full sm:w-auto text-primary border-2 !border-primary"
                                variant={"outline"}
                            >
                                <Filter className="w-4 h-4 mr-2" />
                                Apply Filters
                            </Button>
                           
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Articles Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <h2 className="text-3xl font-bold mb-8">Latest Reads</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <Card
                            key={article.id}
                            className="bg-card overflow-hidden group  transition-all duration-300 cursor-pointer pt-0"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className={`bg-secondary-foreground text-white dark:text-black font-semibold py-1 px-2 border-0`}>
                                        {article.category}
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader>
                                <CardTitle className="text-xl group-hover:text-red-400 transition-colors">
                                    {article.title}
                                </CardTitle>
                                <CardDescription className="text-gray-400">
                                    {article.description}
                                </CardDescription>
                            </CardHeader>

                            <CardFooter className="flex-col items-start gap-4">
                                <div className="flex items-center justify-between w-full text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>{article.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{article.date}</span>
                                    </div>
                                </div>

                                <Button
                                    className="w-full bg-primary text-white"
                                >
                                    Read Article
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        className="border-gray-700 text-white hover:bg-gray-800"
                        size="lg"
                    >
                        Load More Articles
                    </Button>
                </div>

            </div>
        </div>




    )
}

export default ExplorePage