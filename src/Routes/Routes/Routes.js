import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/UserFile/Login";
import SignUp from "../../Pages/UserFile/SignUp";
import Booking from "../../Pages/Booking/Booking";
import ConfromService from "../../Pages/ConfromService/ConfromService";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/booking/:id',
                element:<Booking/>,
                loader:({params}) => fetch(`http://localhost:4000/flyData/${params.id}`)

            },
            {
                path:'/serviceConform',
                element:<ConfromService/>
            }
        ]
    }
])