import { pageRoutes } from "../contants";

/* Landing Page */
import LandingPage from "../pages/WebContent/LandingPage/LandingPage";
import WhyJobber from "../pages/WebContent/WhyJobber/WhyJobber";

import Container from "../component/Container";

let routes = [
  {
    path: "/",
    element: <Container />,
    children: [
      { path: pageRoutes.LANDINGPAGE, element: <LandingPage /> },
      { path: pageRoutes.WHYJOBBER, element: <WhyJobber /> },
    ],
  },

]
  
  export default routes;
