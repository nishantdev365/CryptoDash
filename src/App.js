import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar, Watchlist} from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>

            <Route path="/CryptoDash" element={<Homepage />} />
            
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
             
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              
            <Route path="/news" element={<News />} />

            <Route path="/Watchlist" element={<Watchlist />} />

           
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'black', textAlign: 'center' }}>Copyright © 2022 
           <Link to="/">
             - Cryptodash Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/Cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;

