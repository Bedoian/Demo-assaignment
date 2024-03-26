import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const BlogDetail = () => {
    const[tabIndex,setTabIndex]=useState(0)


    const BlogDetail = useLoaderData()
    const { tags, title, published_at, public_reactions_count, reading_time_minutes } = BlogDetail;
    return (
        <div className="">
            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
                <article className="space-y-8 text-gray-900">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
                            <div className="flex items-center md:space-x-2">
                                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full bg-gray-500 border-gray-700" />
                                <p className="text-sm">Leroy Jenkins • {published_at}</p>
                            </div>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{reading_time_minutes} min read • {public_reactions_count} views</p>
                        </div>
                    </div>
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-gray-800">
                        <Link onClick={()=>setTabIndex(0)} to='' rel="noopener noreferrer"  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===0?'border border-b-0':'border-b'}  rounded-t-lg border-gray-400 text-gray-500`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link to='author' onClick={()=>setTabIndex(1)} rel="noopener noreferrer"  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===1?'border border-b-0':'border-b'}  rounded-t-lg border-gray-400 text-gray-500`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                       
                    </div>
                    <div className="text-gray-800">
                         <Outlet></Outlet>
                    </div>
                </article>
                <div>
                 
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold">Related posts</h4>
                        <ul className="ml-4 space-y-1 list-disc">
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;