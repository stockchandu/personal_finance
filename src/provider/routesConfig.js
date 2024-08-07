import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../component/dashboard/Dashboard";
import { Home } from "../component/home/Home";
import { Liability } from "../component/liability/Liability";
import { Investment } from "../component/investment/Investment";
import { Saving } from "../component/saving/Saving";
import { MoneyIn } from "../component/moneyin/MoneyIn";
import { MoneyOut } from "../component/moneyout/MoneyOut";
import { RouteGuard } from "./routeGuard";
import Login from "../component/login/Login";
import { MoneyRule } from "../component/moneyrule/MoneyRule";
import { EarnedMoney } from "../component/earnedMoney/EarnedMoney";
import { Insurance } from "../component/insurance/Insurance";



export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteGuard>
        <Dashboard />
      </RouteGuard>
    ),
    children: [
      {
        path: "",
        element: (
          <RouteGuard>
            <Home />
          </RouteGuard>
        ),
      },
      {
        path: "liability",
        element: (
          <RouteGuard>
            <Liability />
          </RouteGuard>
        ),
      },
      {
        path: "invest",
        element: (
          <RouteGuard>
            <Investment />
          </RouteGuard>
        ),
      },
      {
        path: "saving",
        element: (
          <RouteGuard>
            <Saving />
          </RouteGuard>
        ),
      },
      {
        path: "money-in",
        element: (
          <RouteGuard>
            <MoneyIn />
          </RouteGuard>
        ),
      },
      {
        path: "money-out",
        element: (
          <RouteGuard>
            <MoneyOut />
          </RouteGuard>
        ),
      },
      {
        path: "earned-money",
        element: (
          <RouteGuard>
           <EarnedMoney/>
          </RouteGuard>
        ),
      },
      {
        path: "insurance",
        element: (
          <RouteGuard>
            <Insurance/>
          </RouteGuard>
        ),
      },
      {
        path: "money-rule",
        element: (
          <RouteGuard>
            <MoneyRule />
          </RouteGuard>
        ),
      },
      {
        path: "vehicles",
        element: (
          <RouteGuard>
            <h1>vehicles</h1>
          </RouteGuard>
        ),
      },
      {
        path: "documents",
        element: (
          <RouteGuard>
            <h1>documents</h1>
          </RouteGuard>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
