import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ pageTitle = '', children }) => (
    <>
      <Helmet>
        <html lang="pt-PT" />
        <title> SuperSoft | {pageTitle}</title>
      </Helmet>
      <main>{children}</main>
    
    </>
  );
  
  export default Layout;
  