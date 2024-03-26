import { Link } from "react-router-dom";
import wave from '../assets/wave.svg'
const Home = () => {

    return (
        <div className=" min-h-screen">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Welcome to XeRon</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="flex justify-center gap-4">
                            <Link to="/blogs" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
                                <span className="relative text-primary group-hover:text-white">Read Blogs</span>
                            </Link>
                            <Link to="/bookmarks" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
                                <span className="relative text-primary group-hover:text-white">Bookmarks</span>
                            </Link>
                        </div>
                    </div>
                   
                </div>
                <img className="absolute bottom-0 w-full" src={wave} alt="" />
            </div>
           
        </div>
    );
};

export default Home;