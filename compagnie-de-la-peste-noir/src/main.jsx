import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homes from "./Pages/Homes";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homes />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
