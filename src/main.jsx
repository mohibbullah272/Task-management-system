import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import AuthPage from './Page/AuthPage.jsx';
import PrivetRoute from './Route/PrivetRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivetRoute><Main></Main></PrivetRoute>,
  },
  {
    path:'/authPage',
    element:<AuthPage></AuthPage>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)
