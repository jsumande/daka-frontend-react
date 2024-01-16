import { pageRoutes } from "../contants";

/* Landing Page */
import Container from "../component/Container";
import LandingPage from "../pages/WebContent/LandingPage/LandingPage";
import WhyJobber from "../pages/WebContent/WhyJobber/WhyJobber";

/* Authenticate Page */
import LoginPage from "../pages/AuthPage/login";
import RegistrationPage from "../pages/AuthPage/registration";

let routes = [
  {
    path: "auth",
    children: [
      { path: pageRoutes.LOGINPAGE, element: <LoginPage /> },
      { path: pageRoutes.REGISTRATIONPAGE, element: <RegistrationPage /> },
    ],
  },

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
