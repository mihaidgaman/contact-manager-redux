import { useSelector } from 'react-redux';
import { GoogleLogin } from './GoogleLogin';

export const Authorize = ({ children }) => {
  const authenticated = useSelector(({ auth }) => {
    return auth.authenticated;
  });

  if (!authenticated) {
    return (
      <div className="flex justify-center">
        <GoogleLogin></GoogleLogin>
      </div>
    );
  }

  return children;
};
