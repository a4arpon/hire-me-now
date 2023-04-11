import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppContainer from "./AppContainer";
import Home from "./pages/Home/Home";
import ApplyToJob from "./pages/ApplyToJob/ApplyToJob";
import { appliedJobsLoader, jobLoader } from "./utilities/Utility";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import Statistics from "./pages/Statistics/Statistics";
// React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
        loader: appliedJobsLoader,
      },
      {
        path: "/applyToJob/:id",
        element: <ApplyToJob />,
        loader: ({ params }) => jobLoader(params.id),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
