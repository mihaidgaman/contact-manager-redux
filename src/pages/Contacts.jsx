import { Layout } from './../layouts/Layout';
import { Contacts as ContactList } from './../components/contacts';
import { Authorize } from '../components/auth';

export const Contacts = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 mb-6">
        <Authorize>
          <h1 className="mb-4">Contacts</h1>

          <ContactList></ContactList>
        </Authorize>
      </div>
    </Layout>
  );
};
