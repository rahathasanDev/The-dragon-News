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
          element: <Home></Home>
        },
        {
          path: '/category/:id',
          element: <Category></Category>
        }
      ]
    },
    {
      path: '/news',
      element: <Newslayout></Newslayout>,
      children: [
        {
          path: ':id',
          element: <News></News>
        }
      ]

    }






  ]
)
export default router;