import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PopupProvider } from "./components/Infopub/context/PopupContext";
import Navbar from "./components/Navbar";

import Homes from "./Pages/Homes";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Homes />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PopupProvider>
      <RouterProvider router={router} />
    </PopupProvider>
  </React.StrictMode>
);
