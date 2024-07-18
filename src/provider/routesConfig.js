import {
    createBrowserRouter,
    RouterProvider,
    // Link
  } from "react-router-dom";
  import Dashboard from "../component/dashboard/Dashboard";
import { AllDetails } from "../component/home/AllDetails";
import { Liability } from "../component/liability/Liability";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children:[
        {
            path: "/",
            element: <AllDetails/>
          },
          {
            path: "/liability",
            element: <Liability/>
          },
      ]
    },
  {
      path: "/about", 
      element: (
        <div>
          <h1>Hello from About</h1> 
          {/* <Link to="/">Home</Link> */}
        </div>
      ),
    },
  ]);