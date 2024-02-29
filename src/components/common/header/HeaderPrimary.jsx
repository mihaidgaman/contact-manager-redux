import { Link } from 'react-router-dom';
import { SearchContacts } from '../../contacts';
import { useSelector } from 'react-redux';

export const HeaderPrimary = () => {
  const authenticated = useSelector(({ auth }) => {
    return auth.authenticated;
  });

  return (
    <section className="border-b border-b-gray-500 py-4 ">
      <div className="container mx-auto px-4 flex justify-between min-h-10">
        <h1 className="font-semibold text-2xl">
          <Link to="/" title="Home">
            Contact Manager
          </Link>
        </h1>

        {authenticated ? (
          <div className="w-3/4">
            <SearchContacts></SearchContacts>
          </div>
        ) : null}
      </div>
    </section>
  );
};
