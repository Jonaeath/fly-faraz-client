import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/UserFile/Login";
import SignUp from "../../Pages/UserFile/SignUp";
import Booking from "../../Pages/Booking/Booking";
import ConfromService from "../../Pages/ConfromService/ConfromService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Services from "../../Pages/Services/Services";
import TicketAvailable from "../../Pages/TicketAvailable/TicketAvailable";
import Review from "../../Pages/Home/Home/Review/Review";

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
                path:'/ticket',
                element:<TicketAvailable/>
            },
            {
                path:'/service',
                element:<Services/>
            },
            {
                path:'/review',
                element:<Review/>
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
                element:<PrivateRoute><Booking/></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:4000/flyData/${params.id}`)

            },
            {
                path:'/serviceConform',
                element:<PrivateRoute><ConfromService/></PrivateRoute>
            }
        ]
    }
])