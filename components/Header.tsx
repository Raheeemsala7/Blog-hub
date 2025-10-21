import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './theme-toggle'
import { Button, buttonVariants } from './ui/button'

const Header = () => {
    return (
        <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-lg cursor-default-must">
            <div className="w-full max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    


                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <div className="w-11 h-11 bg-[#FF6B6B] rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                <div className="flex space-x-0.75 pb-1 h-full items-end">
                                    <div className="w-1 h-4/5  bg-slate-900 rounded-full"></div>
                                    <div className="w-1 h-3/5  bg-slate-900 rounded-full"></div>
                                    <div className="w-1 h-2/5  bg-slate-900 rounded-full"></div>
                                    <div className="w-1 h-4/5  bg-slate-900 rounded-full transform rotate-4"></div>
                                </div>
                            </div>
                            <span className="text-xl text-[#FF6B6B] font-bold ">Nexus</span>
                        </div>
                    </div>

                    <nav>
                        <ul className='flex items-center gap-4'>
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/explore"}>Explore</Link>
                            </li>
                            <li>
                                <Link href={""}>Articles</Link>
                            </li>
                            <li>
                                <Link href={""}>About</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className='flex gap-4 items-center'>
                        <Link href={"login"} className={buttonVariants()}>
                            Sign in
                        </Link>
                        <Link href={"register"} className={buttonVariants()}>
                            Sign in
                        </Link >
                        <ThemeToggle />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header