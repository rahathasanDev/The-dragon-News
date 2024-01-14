import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home";
import Category from "../Category/Category";
import Newslayout from "../Layout/Newslayout";
import News from "../Layout/News";
import About from "../Layout/About";
import Career from "../Layout/career";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Layout/Login";
import Register from "../Layout/Register";
import Privateroutes from "./Privateroutes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/career',
        element: <Career></Career>,
      },
    ]

  },
  {
    path: '/category',
    element: <Main></Main>,
    children: [

      {
        path: ':id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)

      }
    ]
  },
  {
    path: '/news',
    element: <Newslayout></Newslayout>,
    children: [
      {
        path: ':id',
        element: <Privateroutes><News></News></Privateroutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]

  }


]
)
export default router;