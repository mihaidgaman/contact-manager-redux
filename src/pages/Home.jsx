import { GoogleLogin } from '../components/auth';
import { Layout } from '../layouts/Layout';
import { useSelector } from 'react-redux';

export const Home = () => {
  const authenticated = useSelector(({ auth }) => {
    return auth.authenticated;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 text-center pt-40">
        {authenticated ? null : (
          <div className="flex justify-center">
            <GoogleLogin></GoogleLogin>
          </div>
        )}
      </div>
    </Layout>
  );
};
