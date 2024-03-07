import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Contacts, Home, NewContactPage, EditContactPage } from './pages';

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
  {
    path: '/contacts/:id/edit/',
    element: <EditContactPage></EditContactPage>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
