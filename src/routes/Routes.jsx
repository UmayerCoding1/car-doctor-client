import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import ServicesDetails from "../components/pages/servicesDetails/ServicesDetails";
import Booking from "../components/pages/checkout/Booking";
import Bookings from "../components/pages/bookings/Bookings";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
   {
    path:'/',
    element: <Main/>,
    children: [
       {
        path:'/',
        element:<Home/>
       },
       {
         path:'/login',
         element: <Login/>
       },
       {
         path:'/register',
         element:<Register/>
       },
       {
         path:'/serviceDetail/:id',
         element:<PrivateRoute><ServicesDetails/></PrivateRoute>,
         loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
       },
       {
         path:'/booking/:id',
         element: <PrivateRoute><Booking/></PrivateRoute>,
         loader: ({params}) => fetch(`http://localhost:5000/services/checkout/${params.id}`)
       },
       {
        path:'/bookings',
        element: <PrivateRoute><Bookings/></PrivateRoute>
       }
    ]
   }
])

export default router;