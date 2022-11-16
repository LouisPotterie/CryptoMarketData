import React from 'react';
import { Link } from "react-router-dom"
import HistoryChart from '../components/HistoryChart';
import CoinDetail from '../components/CoinDetail';
import '../style/CryptoDetail.css';


const CryptoDetail = () => {

  return (
    <div className="space100">
        <HistoryChart />
        <section className='space20'> 
            <CoinDetail />
        </section>
    </div>
  );
}

export default CryptoDetail;