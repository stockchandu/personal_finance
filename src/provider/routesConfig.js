import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../component/dashboard/Dashboard";
import { Home } from "../component/home/Home";
import { RouteGuard } from "./routeGuard";
import Login from "../component/login/Login";
import { MoneyRule } from "../component/moneyrule/MoneyRule";
import { MpfUniversal } from "../component/mpfuniversal/MpfUniversal";
import { mpfKey } from "../constant/global";
import { MyDocuments } from "../component/mydocuments/MyDocuments";


const individualRoutes = [
  {
    path: "",
    element: (
      <RouteGuard>
        <Home />
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
  // {
  //   path: "vehicles",
  //   element: (
  //     <RouteGuard>
  //       <h1>vehicles</h1>
  //     </RouteGuard>
  //   ),
  // },
  {
    path: "documents",
    element: (
      <RouteGuard>
        <MyDocuments/>
      </RouteGuard>
    ),
  },
];

const redColor = "#D12F2E";
const greenColor = "#6AA84F";

const color = {
  earnedMoney: {
    addBG: greenColor,
    removeBG: redColor,
  },
  insurance: {
    addBG: greenColor,
    removeBG: redColor,
  },
  liability: {
    addBG: redColor,
    removeBG: greenColor,
  },
  moneyOut: {
    addBG: redColor,
    removeBG: greenColor,
  },
  moneyIn: {
    addBG: redColor,
    removeBG: greenColor,
  },
  saving: {
    addBG: greenColor,
    removeBG: redColor,
  },
  investment: {
    addBG: greenColor,
    removeBG: redColor,
  },
};

const childrenRoutes = [
  {
    path: "liability",
    sectionKey: mpfKey.LIABILITY,
    addLabel: "Add Liability",
    removeLabel: "Close Liability",
    bgColor: color.liability,
  },
  {
    path: "invest",
    sectionKey: mpfKey.INVESTMENT,
    addLabel: "Add Invest",
    removeLabel: "Close Invest",
    bgColor: color.investment,
  },
  {
    path: "saving",
    sectionKey: mpfKey.SAVING,
    addLabel: "Add Saving",
    removeLabel: "Close Saving",
    bgColor: color.saving,
  },
  {
    path: "money-in",
    sectionKey: mpfKey.MONEYIN,
    addLabel: "Add Inflow",
    removeLabel: "Close Inflow",
    bgColor: color.moneyIn,
  },
  {
    path: "money-out",
    sectionKey: mpfKey.MONEYOUT,
    addLabel: "Add Outflow",
    removeLabel: "Close Outflow",
    bgColor: color.moneyOut,
  },
  {
    path: "earned-money",
    sectionKey: mpfKey.EARNEDMONEY,
    addLabel: "Add Income",
    removeLabel: "Close Income",
    bgColor: color.earnedMoney,
  },
  {
    path: "insurance",
    sectionKey: mpfKey.INSURANCE,
    addLabel: "Add Insurance",
    removeLabel: "Close Insurance",
    bgColor: color.insurance,
  },
  {
    path: "vehicles",
    sectionKey: mpfKey.VEHICLE,
    addLabel: "Add Vehicle",
    removeLabel: "Close Vehicle",
    bgColor: color.insurance,
  },
];

const renderChildrenRoutes = () => {
  return childrenRoutes.map((route) => {
    return {
      path: route.path,
      element: (
        <RouteGuard>
          <MpfUniversal {...route} />
        </RouteGuard>
      ),
    };
  });
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteGuard>
        <Dashboard />
      </RouteGuard>
    ),
    children: [...individualRoutes, ...renderChildrenRoutes()],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
