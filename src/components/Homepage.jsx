import React from 'react';
import millify from 'millify';
import { Typography, Row, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      
      <div className='topdetails'>
      <Row gutter={[32, 32]} justify="space-evenly">
        <Row span={12}><Statistic title="Cryptos:" value={globalStats.total} /></Row>
        <Row span={12}><Statistic title="Exchanges:" value={millify(globalStats.totalExchanges)} /></Row>
        <Row span={12}><Statistic title="Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Row>
        <Row span={12}><Statistic title="24h Volume:" value={`$${millify(globalStats.total24hVolume)}`} /></Row>
        <Row span={12}><Statistic title="Markets:" value={millify(globalStats.totalMarkets)} /></Row>
      </Row>
      </div>
      
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;








