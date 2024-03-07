const initialState = {
  entities: {
    // asdada: {
    //   id: 'asdada',
    //   name: 'mihai',
    //   surname: 'daniel',
    //   phone: '0744203232',
    //   email: 'it@nerv.ro',
    //   userId: '114293715984109355206',
    // },
  },
};

export const contactsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { [payload]: _, ...entities } = state.entities;

  switch (type) {
    case 'contacts/set':
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: payload,
        },
      };
    case 'contacts/setMultiple':
      return {
        ...state,
        entities: (payload || []).reduce((entities, contact) => {
          entities[contact.id] = contact;

          return entities;
        }, {}),
      };
    case 'contacts/unset':
      return {
        ...state,
        entities,
      };
    default:
      return state;
  }
};
