import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import { Home } from "@pages/home";
import { Detail } from "@pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>404</div>,
    children: [
      { index: true, element: <Home /> },
      { path: "detail/:placeKey", element: <Detail /> },
    ],
  },
]);

export default router;