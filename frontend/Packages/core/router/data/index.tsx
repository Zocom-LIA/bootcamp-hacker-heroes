import {createBrowserRouter, RouterProvider} from "react-router-dom" ; 

import { LandingsPage } from "@zocom/landing-page" ;

const router = createBrowserRouter([
    {
        path:"/",
        element: <LandingsPage />
    },
    {
        path:"*",
        element: <p>Page not Found</p>
    }
]);


export const AppRoutes = () => {
        return <RouterProvider router={router} />
} ;