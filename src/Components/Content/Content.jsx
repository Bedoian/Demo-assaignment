import { useLoaderData } from "react-router-dom";
import Markdown from 'react-markdown'
import placeholder from '../../assets/404.jpg'
import rehypeRaw from "rehype-raw";
const Content = () => {
    const blogs = useLoaderData()
    console.log(blogs)
    const { tags, cover_image,body_html,
        id, title, published_at } = blogs;
    return (
        <div>
            <div rel="noopener noreferrer" to={`/blog/${id}`}
                className=" border-2  border-secondary   rounded-lg p-4 max-w-full mx-auto  max-h-full  sm:block">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholder} />
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                    {
                        tags.map(tag => <a key={tag} rel="noopener noreferrer" href="" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#{tag}</a>)
                    }

                </div>
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p><Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown></p>
                </div>

            </div>
        </div>
    );
};

export default Content;