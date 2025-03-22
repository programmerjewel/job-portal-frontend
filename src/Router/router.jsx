import {
  createBrowserRouter,
} from "react-router-dom";

import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home";
import SignUp from "../component/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h2>Page not found!</h2>,
    children:[
      {
        path: '/signup',
        element: <SignUp/>,
      }
    ]
  }
])
export default router;