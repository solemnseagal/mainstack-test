import { lazy } from "react";
import { IRoute } from "./utils/types/components";

const Transactions = lazy(() => import("./pages/Transactions/Transactions"));
const routes = [
  {
    path: "/transactions",
    name: "Transactions",
    element: Transactions,
  },
];

export default routes;
