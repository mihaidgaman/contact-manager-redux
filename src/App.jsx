import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Contacts, Home, NewContactPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/contacts',
    element: <Contacts></Contacts>,
  },
  {
    path: '/contacts/new',
    element: <NewContactPage></NewContactPage>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
