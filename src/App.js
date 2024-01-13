import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import { LandingPage } from "./landing/LandingPage";
import { LoginPage } from "./login/LoginPage";
import ProtectedLayout from "./components/ProtectedLayout";
import { Calender } from "./Calenders/Calender";

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
				path: '/calender',
				element: <Calender />,
			},
    ],
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
