import {
    RouterProvider,
  } from "react-router-dom";
import { router } from "./routesConfig";
export const RouterAdaptor =(children)=>{
return <RouterProvider router={router}>{children}</RouterProvider>
}