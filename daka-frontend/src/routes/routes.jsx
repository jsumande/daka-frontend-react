import { pageRoutes } from "../contants";

/* Landing Page */
import LandingPage from "../pages/WebContent/LandingPage/LandingPage";
import AboutUs from "../pages/WebContent/AboutUs/AboutUs";

import Container from "../component/Container";

let routes = [
  {
    path: "/",
    element: <Container />,
    children: [
      { path: pageRoutes.LANDINGPAGE, element: <LandingPage /> },
      { path: pageRoutes.ABOUTUS, element: <AboutUs /> },
    ],
  },

]
  
  export default routes;
