import { contactsClient } from './../../../api/contacts';

// POST /contacts
// the computer "thunk" a bit
export const createContact = (contact) => {
  return async (dispatch, getState) => {
    const state = getState();
    const { auth } = state;
    const { user } = auth;

    contact.userId = `${user.id}`;

    const { data } = await contactsClient.post('/contacts', contact);

    dispatch(setContact(data));

    return data;
  };
};

//options: // GET /contact/id

// GET /contacts
export const readContacts = () => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const userId = auth?.user?.id;

    const { data: users } = await contactsClient.get('/contacts', {
      params: {
        userId,
      },
    });

    dispatch(setContacts(users));
  };
};

// PATCH /contact/id
export const updateContact = (contact) => {
  return async (dispatch, getState) => {
    const { data } = await contactsClient.patch(
      `/contacts/${contact.id}`,
      contact,
    );

    dispatch(setContact(data));
  };
};

// DELETE /contact/id
export const deleteContact = (contactId) => {
  return async (dispatch) => {
    const { data } = await contactsClient.delete(`/contacts/${contactId}`);

    dispatch(unsetContact(contactId));
  };
};

export const setContact = (contact) => {
  return {
    type: 'contacts/set',
    payload: contact,
  };
};

export const setContacts = (contacts) => {
  return {
    type: 'contacts/setMultiple',
    payload: contacts,
  };
};

export const unsetContact = (contactId) => {
  return {
    type: 'contacts/unset',
    payload: contactId,
  };
};
