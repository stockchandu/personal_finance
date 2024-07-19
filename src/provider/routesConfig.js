import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../component/dashboard/Dashboard";
import { Home } from "../component/home/Home";
import { Liability } from "../component/liability/Liability";
import { Investment } from "../component/investment/Investment";
import { Saving } from "../component/saving/Saving";
import { MoneyIn } from "../component/moneyin/MoneyIn";
import { MoneyOut } from "../component/moneyout/MoneyOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/liability",
        element: <Liability />,
      },
      {
        path: "/invest",
        element: <Investment />,
      },
      {
        path: "/saving",
        element: <Saving />,
      },
      {
        path: "/money-in",
        element: <MoneyIn />,
      },
      {
        path: "/money-out",
        element: <MoneyOut />,
      },
    ],
  }
]);
