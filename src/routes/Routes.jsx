import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import BlogDetail from "../Pages/BlogDetail/BlogDetail";
import Bookmarks from "../Pages/Bookmarks";
import Content from "../Components/Content/Content";
import Author from "../Components/Author/Author";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/blogs',
          element: <Blogs />,
          loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path: '/blog/:id',
          element: <BlogDetail/>,
          loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index:true,
                element:<Content/>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
            },
            {
                path:'author',
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
                element:<Author></Author>
            }
          ]
        },
        {
          path: '/bookmarks',
          element: <Bookmarks />
        }
      ]
    },
  ]);