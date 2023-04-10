import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContainer from "./AppContainer";
import Home from "./pages/Home/Home";
import "./index.css";
import About from "./pages/About/About";
import ApplyToJob from "./pages/ApplyToJob/ApplyToJob";
import jobLoader from "./utilities/Utility";
// React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("./data.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/applyToJob/:id",
        element: <ApplyToJob />,
        loader: ({ params }) => jobLoader(params.id),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
