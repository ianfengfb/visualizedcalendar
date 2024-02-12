import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import { LandingPage } from "./landing/LandingPage";
import { LoginPage } from "./login/LoginPage";
import ProtectedLayout from "./components/ProtectedLayout";
import { Calendar } from "./Calenders/Calendar";
import { EventTypesPage } from "./Calenders/EventTypes/EventTypesPage";
import { CreateNewEventType } from "./Calenders/EventTypes/CreateNewEventType";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <LandingPage />,
      },
      {
				path: '/login',
				element: <LoginPage />,
			},
    ]
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
				path: '/calendar',
				element: <Calendar />,
			},
      {
        path: '/event-types',
        children: [
          {
            index: true,
            element: <EventTypesPage />,
          },
          {
            path: 'create',
            element: <CreateNewEventType />,
          },
        ],
      },
    ],
  },
])

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
