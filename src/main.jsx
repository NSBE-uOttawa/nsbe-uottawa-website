import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Execs from "./components/Execs/Execs.jsx";
import About from "./components/About/About.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import NavBar from "./components/Navigation/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/execs",
    element: <Execs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
