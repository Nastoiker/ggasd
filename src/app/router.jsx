import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/home/ui/Page';
import { Layout } from './Layout/baseLayout';
import { Layout1 } from './Layout/baseLayout1';
import { CatalogPage } from '../pages/catalog/ui/Page';
import { ReceptPage } from '../pages/recept/ui/Page';
import { SigninPage } from '../pages/signin/ui/Page';
import { SignupPage } from '../pages/signup/ui/Page';
import { TestPage } from '../pages/test/ui/Page';
import { ProfilePage } from '../pages/profile/ui/Page';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/catalog',
        element: <CatalogPage />
      },
      {
        path: '/recept/:id',
        element: <ReceptPage />
      },
      {
        path: '/test',
        element: <TestPage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      }
    ]
  },
  {
    element: <Layout1 />,
    children: [
      {
        path: '/signin',
        element: <SigninPage />
      },
      {
        path: '/signup',
        element: <SignupPage />
      }
    ]
  }
]);
