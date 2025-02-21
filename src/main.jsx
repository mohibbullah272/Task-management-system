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
import Home from './Page/Home.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivetRoute><Main></Main></PrivetRoute>,
    children:([
      {
        path:'/',
        element:<Home></Home>
      }
    ])
  },
  {
    path:'/authPage',
    element:<AuthPage></AuthPage>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<QueryClientProvider client={queryClient}>
<AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
</QueryClientProvider>
  </StrictMode>,
)
