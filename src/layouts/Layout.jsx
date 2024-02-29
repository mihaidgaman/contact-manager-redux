import { HeaderPrimary, HeaderSecondary } from '../components/common/header';

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <HeaderSecondary></HeaderSecondary>
        <HeaderPrimary></HeaderPrimary>
      </header>

      <main>{children}</main>
    </>
  );
};
