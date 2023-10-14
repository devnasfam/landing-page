import React, { Fragment } from 'react';
import Nav from './Nav';
import Header from './Header';
import Sections from './Sections';
import Footer from './Footer';
import './style.css';

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Sections />
      <Footer />
    </>
  );
};

export default App;
