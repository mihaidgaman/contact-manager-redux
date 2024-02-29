import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Contacts, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/contacts',
    element: <Contacts></Contacts>,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
