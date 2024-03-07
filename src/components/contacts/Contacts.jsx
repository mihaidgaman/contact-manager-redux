import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, readContacts } from '../../store/actions/contacts';
import { Button } from '../ui';
import { Link } from 'react-router-dom';

export const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(({ contacts }) => {
    return contacts.entities;
  });

  useEffect(() => {
    dispatch(readContacts());
  }, [dispatch]);

  return (
    <ul>
      {Object.values(contacts).map((contact) => {
        const { name, id } = contact;

        return (
          <li className="flex gap-4 justify-start items-center" key={id}>
            {name}

            <Button skin="primary" element="span">
              <Link to={`/contacts/${id}/edit`} title="Edit">
                Edit
              </Link>
            </Button>
            <Button
              skin="danger"
              title="Delete"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
