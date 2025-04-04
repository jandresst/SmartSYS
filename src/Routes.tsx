import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);