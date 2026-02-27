import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { Dashboard } from './app/Dashboard'
import { Orders } from './app/Orders.tsx/Orders'
import PrivacyPolicyPage from './app/PrivacyPolicies'
import TermsPage from './app/TermsPage'
import { SignIn } from './auth/signIn'
import { SignUp } from './auth/signup'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/termos-de-uso',
        element: <TermsPage />,
      },
      {
        path: '/politicas-de-privacidade',
        element: <PrivacyPolicyPage />,
      },
    ],
  },
  /*   {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  }, */
])
