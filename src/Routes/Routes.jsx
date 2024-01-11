import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home";
import Category from "../Category/Category";
import Newslayout from "../Layout/Newslayout";
import News from "../Layout/News";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main></Main>,
      children: [
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