import {createBrowserRouter, RouterProvider} from "react-router-dom" ; 

import { LandingsPage } from "@zocom/landing-page" ;
import { EtaPage } from "@zocom/eta-page";
import { OrderDonePage } from "@zocom/order-done-page"
import { SummaryPage } from "@zocom/summary-page" ;
import { ReceiptPage } from "@zocom/receipt-page"
import { KitchenView } from "@zocom/kitchen" ;


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
    },
    {
        path:"/eta",
        element: <EtaPage/>
    },
    {
        path:"/receipt",
        element: <ReceiptPage/>
    },
    {
        path:"/done",
        element: <OrderDonePage/>
    },
    {
        path:"/kitchen",
        element: <KitchenView/>
    }
]);


export const AppRoutes = () => {
        return <RouterProvider router={router} />
} ;