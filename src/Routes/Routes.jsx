import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home";
import Category from "../Category/Category";
import Newslayout from "../Layout/Newslayout";
import News from "../Layout/News";
import About from "../Layout/About";
import Career from "../Layout/career";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/career',
          element: <Career></Career>,
        },
        {
          path: '/',
          element: <Category></Category>,
          loader:()=>fetch('http://localhost:5000/news') 
        },
        {
          path: '/category/:id',
          element: <Category></Category>,
          loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        
        }
      ]
    },
    {
      path: '/news',
      element: <Newslayout></Newslayout>,
      children: [
        {
          path: ':id',
          element: <News></News>,
          loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]

    }


  ]
)
export default router;