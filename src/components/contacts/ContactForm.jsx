import { useDispatch } from 'react-redux';
import { Button } from '../ui';
import { createContact } from '../../store/actions/contacts';

export const ContactForm = ({ contact = {}, edit = false }) => {
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    // these are DOM elements
    const { name, surname, phone, email } = form;

    const contact = {
      name: name.value,
      surname: surname.value,
      phone: phone.value,
      email: email.value,
    };

    dispatch(createContact(contact));
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
      <div className="flex gap-3 items-stretch h-14">
        <label htmlFor="name" className="self-center">
          Name:
        </label>

        <input
          type="text"
          name="name"
          id="name"
          className="border border-slate-300 rounded px-2 grow"
          required
        ></input>
      </div>

      <div className="flex gap-3 items-stretch h-14">
        <label htmlFor="surname" className="self-center">
          Surname:
        </label>

        <input
          type="text"
          name="surname"
          id="surname"
          className="border border-slate-300 rounded px-2 grow"
          required
        ></input>
      </div>

      <div className="flex gap-3 items-stretch h-14">
        <label htmlFor="phone" className="self-center">
          Phone:
        </label>

        <input
          type="tel"
          name="phone"
          id="phone"
          className="border border-slate-300 rounded px-2 grow"
          required
        ></input>
      </div>

      <div className="flex gap-3 items-stretch h-14">
        <label htmlFor="email" className="self-center">
          Email:
        </label>

        <input
          type="email"
          name="email"
          id="email"
          className="border border-slate-300 rounded px-2 grow"
          required
        ></input>
      </div>

      <footer className="text-center">
        <Button skin="primary" title="Save" type="submit">
          Submit
        </Button>
      </footer>
    </form>
  );
};
