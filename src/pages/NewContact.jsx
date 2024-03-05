import { ContactForm } from '../components/contacts';
import { Layout } from '../layouts/Layout';

export const NewContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-14">
        <h1 className="mb-8 font-bold text-2xl">New Contact</h1>

        <div className="mx-auto w-1/3">
          <ContactForm></ContactForm>
        </div>
      </div>
    </Layout>
  );
};
