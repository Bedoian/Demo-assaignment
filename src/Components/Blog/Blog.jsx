import { Link } from 'react-router-dom';
import placeholder from '../../assets/404.jpg'
const Blog = ({blog}) => {
    const {cover_image,id,description,title,published_at}=blog
    return (
        <div className=" ">
            <Link rel="noopener noreferrer" to={`/blog/${id}`}
            className="transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 lg:h-[430px] rounded-lg p-4 max-w-sm mx-auto group hover:no-underline focus:no-underline  hidden sm:block">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image||placeholder}/>
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Blog;