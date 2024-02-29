import { jwtDecode } from 'jwt-decode';
import store from './../store';
import { createUser, readUser, setUser } from '../store/actions/auth';

let initialized = false;
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => {
          const {
            given_name: firstName,
            family_name: lastName,
            email,
            picture: avatar,
            sub: id,
            name,
          } = jwtDecode(response.credential);

          store.dispatch(
            setUser({
              firstName,
              lastName,
              email,
              avatar,
              id,
              name,
            }),
          );

          store
            .dispatch(readUser(id))
            .then((user) => {
              console.log(user);
            })
            .catch(() => {
              // user doesn't exist
              store.dispatch(createUser({ id, avatar }));
            });
        },
        scope: 'email profile',
      });

      resolve();
      initialized = true;
    });
  });
};
