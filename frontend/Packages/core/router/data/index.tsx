import {createBrowserRouter, RouterProvider} from "react-router-dom" ; 

import { LandingsPage } from "@zocom/landing-page" ;
import { SummaryPage } from "@zocom/summary-page" ;

const router = createBrowserRouter([
    {
        path:"/",
        element: <LandingsPage />
    },
    {
        path:"/cart",
        element: <SummaryPage />
    },
    {
        path:"*",
        element: <p>Page not Found</p>
    }
]);


export const AppRoutes = () => {
        return <RouterProvider router={router} />
} ;