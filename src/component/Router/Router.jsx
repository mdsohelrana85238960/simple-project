import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Statistics from "../../pages/Statistics/Statistics";
import Donation from "../../pages/Home/Donation/Donation";
import Error from "../../pages/Error/Error";
import Data from "../AllData/Data/Data";


const myCreateRouter = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element :<Home></Home>,
                errorElement:<Error></Error>,
                loader : ()=> fetch('/public/data.json')
            },
            {
                path : '/donation',
                element :<Donation></Donation>
            },
            {
                path : '/statistics',
                element :<Statistics></Statistics>
            },
            {
                path : '/allData/:id',
                element :<Data></Data>,
                loader : ()=> fetch('/public/data.json')
            },
        ]
    }
])

export default myCreateRouter;