import React, { Fragment, useEffect } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
  function  Mainheader() {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
   


  return ( 
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};
export default Mainheader;
