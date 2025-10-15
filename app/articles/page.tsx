import { BookOpen, PenLine } from "lucide-react";
import Image from "next/image";


export default function HomePage() {


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

            <section id="featured-articles" className="py-20 bg-gray-50 dark:bg-[#1E293B] section-clickable">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" >Featured Articles</h2>
                        <p className="text-gray-600 dark:text-gray-400" >Discover the latest insights from our community</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <article className="bg-white dark:bg-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                            <Image  className="w-full h-48 object-cover"  width={300} height={100} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/bb2692a325-3ac1f7155b5209b9b77b.png" alt="modern AI technology illustration with blue and teal colors"/>
                                <div className="p-6">
                                    <div className="flex items-center mb-3">
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full" >AI/ML</span>
                                        <span className="text-gray-500 text-sm ml-auto" >5 min read</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" >The Future of AI in Web Development</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4" >Exploring how artificial intelligence is revolutionizing the way we build web applications...</p>
                                    <div className="flex items-center">
                                        <Image width={32} height={32} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Author" className="w-8 h-8 rounded-full mr-3"/>
                                            <span className="text-sm text-gray-700 dark:text-gray-300" >Sarah Johnson</span>
                                            <span className="text-gray-500 text-sm ml-auto" >Dec 15, 2024</span>
                                    </div>
                                </div>
                        </article>

                        {/* <article className="bg-white dark:bg-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                            <Image className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c38f44533e-0900741c34a6bb32f494.png" alt="blockchain technology network visualization with purple and blue tones" />
                                <div className="p-6">
                                    <div className="flex items-center mb-3">
                                        <span className="px-3 py-1 bg-purple/10 text-purple text-sm rounded-full" >Blockchain</span>
                                        <span className="text-gray-500 text-sm ml-auto" >8 min read</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" >Understanding Web3 Architecture</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4" >A comprehensive guide to building decentralized applications on modern blockchain platforms...</p>
                                    <div className="flex items-center">
                                        <Image src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="Author" className="w-8 h-8 rounded-full mr-3"/>
                                            <span className="text-sm text-gray-700 dark:text-gray-300" >Ahmed Hassan</span>
                                            <span className="text-gray-500 text-sm ml-auto" >Dec 12, 2024</span>
                                    </div>
                                </div>
                        </article>

                        <article className="bg-white dark:bg-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                            <Image className="w-full h-48 object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/72b6ce6191-9934560568d83d5b18fc.png" alt="modern mobile app development interface with teal and blue design"/>
                                <div className="p-6">
                                    <div className="flex items-center mb-3">
                                        <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full" >Mobile Dev</span>
                                        <span className="text-gray-500 text-sm ml-auto" >6 min read</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" >React Native vs Flutter 2024</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4" >Comparing the two leading cross-platform mobile development frameworks...</p>
                                    <div className="flex items-center">
                                        <Image width={32} height={32} src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Author" className="w-8 h-8 rounded-full mr-3" />
                                            <span className="text-sm text-gray-700 dark:text-gray-300" >Maria Rodriguez</span>
                                            <span className="text-gray-500 text-sm ml-auto" >Dec 10, 2024</span>
                                    </div>
                                </div>
                        </article> */}
                    </div>
                </div>
            </section>

            <section id="categories" className="py-20 section-clickable">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" >Explore Categories</h2>
                        <p className="text-gray-600 dark:text-gray-400" >Find articles that match your interests</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform cursor-pointer">
                            <i className="text-3xl mb-4" data-fa-i2svg=""><svg className="svg-inline--fa fa-robot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="robot" role="Image " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"></path></svg></i>
                            <h3 className="font-semibold mb-2" >AI &amp; Machine Learning</h3>
                            <span className="text-blue-100 text-sm" >142 articles</span>
                        </div>

                        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform cursor-pointer">
                            <i className="text-3xl mb-4" data-fa-i2svg=""><svg className="svg-inline--fa fa-code" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" role="Image " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg></i>
                            <h3 className="font-semibold mb-2" >Web Development</h3>
                            <span className="text-teal-100 text-sm" >89 articles</span>
                        </div>

                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform cursor-pointer">
                            <i className="text-3xl mb-4" data-fa-i2svg=""><svg className="svg-inline--fa fa-link" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link" role="Image " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path></svg></i>
                            <h3 className="font-semibold mb-2" >Blockchain</h3>
                            <span className="text-purple-100 text-sm" >67 articles</span>
                        </div>

                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform cursor-pointer">
                            <i className="text-3xl mb-4" data-fa-i2svg=""><svg className="svg-inline--fa fa-mobile-screen-button" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-screen-button" role="Image " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"></path></svg></i>
                            <h3 className="font-semibold mb-2" >Mobile Development</h3>
                            <span className="text-orange-100 text-sm" >54 articles</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stats" className="py-20 bg-gray-50 dark:bg-dark-secondary section-clickable">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2" >1,250+</div>
                            <div className="text-gray-600 dark:text-gray-400" >Published Articles</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent mb-2" >450+</div>
                            <div className="text-gray-600 dark:text-gray-400" >Active Authors</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple mb-2" >25K+</div>
                            <div className="text-gray-600 dark:text-gray-400" >Monthly Readers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-orange-500 mb-2" >15+</div>
                            <div className="text-gray-600 dark:text-gray-400" >Countries</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta" className="py-20 relative overflow-hidden section-clickable">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent"></div>
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6" >Ready to Share Your Knowledge?</h2>
                    <p className="text-xl text-blue-100 mb-8" >Join thousands of authors sharing their expertise with the world</p>
                    <button className="px-8 py-4 bg-white text-primary rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold" >
                        <i className="mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-pen-nib" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-nib" role="Image " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"></path></svg></i>
                        Start Writing Today
                    </button>
                </div>
            </section>

            <footer id="footer" className="bg-gray-900 dark:bg-black text-gray-300 py-12 section-clickable">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                                    <i className="text-white text-sm" data-fa-i2svg=""><svg className="svg-inline--fa fa-rocket" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="Image " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg></i>
                                </div>
                                <span className="text-lg font-bold text-white" >UXPilot</span>
                            </div>
                            <p className="text-gray-400 mb-4" >Empowering tech writers and readers worldwide with cutting-edge content.</p>
                            <div className="flex space-x-4">
                                <i className="text-gray-400 hover:text-white cursor-pointer" data-fa-i2svg=""><svg className="svg-inline--fa fa-twitter" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="Image " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></i>
                                <i className="text-gray-400 hover:text-white cursor-pointer" data-fa-i2svg=""><svg className="svg-inline--fa fa-linkedin" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="Image " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></i>
                                <i className="text-gray-400 hover:text-white cursor-pointer" data-fa-i2svg=""><svg className="svg-inline--fa fa-github" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="Image " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></i>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4" >Platform</h3>
                            <ul className="space-y-2">
                                <li><span className="hover:text-white transition-colors cursor-pointer" >Write Articles</span></li>
                                <li><span className="hover:text-white transition-colors cursor-pointer" >Browse Categories</span></li>
                                <li><span className="hover:text-white transition-colors cursor-pointer" >Author Guidelines</span></li>
                                <li><span className="hover:text-white transition-colors cursor-pointer" >Community</span></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4" >Resources</h3>
                            <ul className="space-y-2">
                                <li><span className="hover:text-white transition-colors cursor-pointer" >Help Center</span></li>
                                <li><span className="hover:text-white transition-colors cursor-pointer" >API Documentation</span></li>
                                <li><span className="hover:text-white transition-colors cursor-pointer" >Writing Tools</span></li>
                                <li><span className="hover:text-white transition-colors cursor-pointer" >Analytics</span></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4" >Company</h3>
                            <ul className="space-y-2">
                                <li><span className="hover:text-white transition-colors cursor-pointer" >About Us</span></li>
                                <li><span className="hover:text-white transition-colors cursor-pointer" >Privacy Policy</span></li>
                                <li><span className="hover:text-white transition-colors cursor-pointer" >Terms of Service</span></li>
                                <li><span className="hover:text-white transition-colors cursor-pointer" >Contact</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p className="text-gray-400" >© 2024 UXPilot. All rights reserved.</p>
                    </div>
                </div>
            </footer>



        </>

    );
}
