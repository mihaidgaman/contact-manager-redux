const initialState = {
  authenticated: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    id: '',
    name: '',
  },
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'auth/unsetUser':
      return {
        ...initialState,
      };
    case 'auth/setUser':
      return {
        user: payload,
        authenticated: true,
      };
    default:
      return state;
  }
};
