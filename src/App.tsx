import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import DressCode from './components/DressCode';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Countdown />
      <EventDetails />
      <DressCode />
      <Gifts />
      <RSVP />
      <Footer />
    </Layout>
  );
};

export default App;
