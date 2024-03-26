import { useLoaderData } from "react-router-dom";
import Blog from "../Components/Blog/Blog";


const Blogs = () => {
    const blogs = useLoaderData()
    return (
        <div>
            <section className="">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                        <span className="text-xs text-gray-400">February 19, 2021</span>
                        <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                    </div>
                </div>
            </section>
            <div className="grid lg:grid-cols-3 gap-4 mx-32">
                {
                    blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;