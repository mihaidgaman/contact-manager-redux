import { Link } from 'react-router-dom';
import { Authorize } from '../components/auth';
import { Layout } from '../layouts/Layout';
import { useSelector } from 'react-redux';

export const Home = () => {
  const { name } = useSelector(({ auth }) => {
    return auth.user;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 text-center pt-40">
        <Authorize>
          <h1 className="text-lg font-bold mb-4">Hello, {name}</h1>

          <Link
            to="/contacts"
            title="See your contacts"
            className="text-red-800 underline hover:no-underline"
          >
            Contacts
          </Link>
        </Authorize>
      </div>
    </Layout>
  );
};
