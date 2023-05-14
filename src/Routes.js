/* global VANTA */
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about_us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/projects",
    element: <Services />,
  },
  {
    path: "/careers",
    element: <Services />,
  },
  {
    path: "/work_with_us",
    element: <Services />,
  },
]);

function Routes() {
  useEffect(() => {
    VANTA.WAVES({
      el: "#codeavenue-background",
      color: 0x000000,
      waveHeight: 10,
      shininess: 30,
      waveSpeed: 0.6,
      zoom: 0.8,
    });
  });
  return (
    <div>
      <div id="codeavenue-background" />
      <RouterProvider router={router} />
    </div>
  );
}

export default Routes;
