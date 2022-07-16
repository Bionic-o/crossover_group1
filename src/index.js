import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Main/Header';
import MePage from './MePage';
import NewsFeed from './Main/NewsFeed';
import AboutUser from './AboutUser';
import Footer from './Main/Footer';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<MePage />
    <Header />
    <NewsFeed />
    <AboutUser />
    <Footer />*/}
    <App />
  </React.StrictMode>
);