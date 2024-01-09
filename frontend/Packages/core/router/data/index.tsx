import {createBrowserRouter, RouterProvider} from "react-router-dom" ; 

import { LandingsPage } from "@zocom/landing-page" ;
import { EtaPage } from "@zocom/eta-page";

const router = createBrowserRouter([
    {
        path:"/",
        element: <LandingsPage />
    },
    {
        path:"*",
        element: <p>Page not Found</p>
    },
    {
        path:"/eta",
        element: <EtaPage/>
    },
    {
        path:"receipt",
        element: <p>RECEIPT</p>
    }
]);


export const AppRoutes = () => {
        return <RouterProvider router={router} />
} ;