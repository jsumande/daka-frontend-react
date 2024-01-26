import { pageRoutes } from "../contants";

/* Landing Page */
import Container from "../component/Container";
import DashboardContainer from "../component/DashboardContainer";
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

import Home from "../pages/App/Home/Home";
import Schedule from "../pages/App/Schedule/Schedule";
import Clients from "../pages/App/Clients/Clients";
import Request from "../pages/App/Request/Request";
import Quotes from "../pages/App/Quotes/Quotes";
import Jobs from "../pages/App/Jobs/Jobs";
import Invoices from "../pages/App/Invoices/Invoices";
import Reports from "../pages/App/Reports/Reports";
import Expenses from "../pages/App/Expenses/Expenses";
import Timesheets from "../pages/App/Timesheets/Timesheets";
import Apps from "../pages/App/Apps/Apps";

let routes = [

  {
    path: "dashboard",
    element: <DashboardContainer/>,
    children: [
      { path: pageRoutes.DASHHOME, element: <Home /> },
      { path: pageRoutes.DASHSCHEDULE, element: <Schedule /> },
      { path: pageRoutes.DASHCLIENT, element: <Clients /> },
      { path: pageRoutes.DASHREQUESTS, element: <Request /> },
      { path: pageRoutes.DASHQUOTES, element: <Quotes /> },
      { path: pageRoutes.DASHJOBS, element: <Jobs /> },
      { path: pageRoutes.DASHINVOICES, element: <Invoices /> },
      { path: pageRoutes.DASHREPORTS, element: <Reports /> },
      { path: pageRoutes.DASHEXPENSES, element: <Expenses /> },
      { path: pageRoutes.DASHTIMESHEETS, element: <Timesheets /> },
      { path: pageRoutes.DASHAPPS, element: <Apps /> },
    ],
  },
  
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
