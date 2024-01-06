import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./components/ErrorPage";
import { LandingPage } from "./landing/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
    ]


  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
