import { useSelector } from 'react-redux';

export const Greeting = () => {
  const { firstName } = useSelector(({ auth }) => {
    const { user } = auth;
    const { firstName } = user;

    return { firstName };
  });

  return <b>Hello, {firstName}.</b>;
};
