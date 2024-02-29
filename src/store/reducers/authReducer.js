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
        ...state,
        authenticated: false,
      };
    case 'auth/setUser':
      return {
        ...state,
        authenticated: true,
      };
    default:
      return state;
  }
};
