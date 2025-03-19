import {
  createBrowserRouter,
} from "react-router-dom";

import DefaultLayout from "../layout/DefaultLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>
  }
])
export default router;