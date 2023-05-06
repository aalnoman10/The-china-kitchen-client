import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Resister from "../Pages/Login/Resister/Resister";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import { Navigate } from "react-router-dom";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Blog from "../Pages/Blog/Blog";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/resister',
                element: <Resister></Resister>
            },
            {
                path: '/recipe',
                element: <Navigate to='/'></Navigate>
            },
            {
                path: '/recipe/:id',
                element: <PrivetRoute><ChefDetails></ChefDetails></PrivetRoute>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default routers;