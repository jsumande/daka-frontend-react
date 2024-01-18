import { pageRoutes } from "../contants";

/* Landing Page */
import Container from "../component/Container";
import LandingPage from "../pages/WebContent/LandingPage/LandingPage";
import WhyJobber from "../pages/WebContent/WhyJobber/WhyJobber";

/* Authenticate Page */
import LoginPage from "../pages/AuthPage/login";
import RegistrationPage from "../pages/AuthPage/registration";

/* Features Pages */

import ClientManager from "../pages/WebContent/Features/Client_Manager";
import SchedulingDispatching from "../pages/WebContent/Features/Scheduling_Dispatching";
import InvoicingFollowUps from "../pages/WebContent/Features/Invoicing_Follow_Ups";
import MobileApp from "../pages/WebContent/Features/Mobile_App";

import OnlineBooking from "../pages/WebContent/Features/Online_Booking";
import ClientHub from "../pages/WebContent/Features/Client_Hub";
import CustomerCommunications from "../pages/WebContent/Features/Customer_Communications";
import JobForms from "../pages/WebContent/Features/Job_Forms";

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

  {
    path: "features",
    element: <Container />,
    children: [
      { path: pageRoutes.FEATURE_CLIENT_MANAGER, element: <ClientManager /> },
      { path: pageRoutes.FEATURE_SCHEDULE_DISPATCHING, element: <SchedulingDispatching /> },
      { path: pageRoutes.FEATURE_INVOICE_SERVICE, element: <InvoicingFollowUps /> },
      { path: pageRoutes.FEATURE_MOBILE_APP, element: <MobileApp /> },
      { path: pageRoutes.FEATURE_ONLINE_BOOKING, element: <OnlineBooking /> },
      { path: pageRoutes.FEATURE_CLIENT_HUB, element: <ClientHub /> },
      { path: pageRoutes.FEATURE_CUSTOMER_COMMUNICATIONS, element: <CustomerCommunications /> },
      { path: pageRoutes.FEATURE_JOB_FORMS, element: <JobForms /> },
    ],
  },

]
  
  export default routes;
