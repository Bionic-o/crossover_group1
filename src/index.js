import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Main/Header';
import MePage from './MePage';
import NewsFeed from './Main/NewsFeed';
import AboutUser from './AboutUser';
import Footer from './Main/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MePage />
    <Header />
    <NewsFeed />
    <AboutUser />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
