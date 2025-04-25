import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoTable.css';
import bitcoinLogo from '../assets/bitcoin.png';
import ethereumLogo from '../assets/eth.png';
import tetherLogo from '../assets/sdt.png';
import xrpLogo from '../assets/rp.png';
import bnb from '../assets/brb.png';
import btcChart from '../assets/bit.jpg';
import solanaLogo from '../assets/sol.png';


// Image mapping
const logoMap = {
  BTC: bitcoinLogo,
  ETH: ethereumLogo,
  USDT: tetherLogo,
  XRP: xrpLogo,
  BNB: bnb,
  SOL: solanaLogo,
};

// Chart image mapping
const chartMap = {
  BTC: btcChart,
  ETH: btcChart,  
  USDT: btcChart,
  XRP: btcChart,
  BNB: btcChart,
  SOL: btcChart,
};


const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  return (
    <div className="table-container">
  <table className="crypto-table">
    <thead>
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Name</th>
          <th>Price ($)</th>
          <th>1h %</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>Market Cap</th>
          <th>24h Volume</th>
          <th>Circulating Supply</th>
          <th>Max Supply</th>
          <th>7D Chart</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset, index) => (
          <tr key={asset.id}>
            <td>{index + 1}</td>
            <td>
              <img src={logoMap[asset.symbol]} alt={asset.name} width="24" />
            </td>
            <td>
              <span className="name-symbol">
                {asset.name}
                <span className="symbol">{asset.symbol}</span>
              </span>
            </td>
           
            <td>${asset.price.toLocaleString()}</td>
            <td className={asset.percentChange1h >= 0 ? 'green' : 'red'}>
              <span className="arrow">{asset.percentChange1h >= 0 ? '▲' : '▼'}</span>
              {asset.percentChange1h.toFixed(2)}%
            </td>
            <td className={asset.percentChange24h >= 0 ? 'green' : 'red'}>
              <span className="arrow">{asset.percentChange24h >= 0 ? '▲' : '▼'}</span>
              {asset.percentChange24h.toFixed(2)}%
            </td>
            <td className={asset.percentChange7d >= 0 ? 'green' : 'red'}>
              <span className="arrow">{asset.percentChange7d >= 0 ? '▲' : '▼'}</span>
              {asset.percentChange7d.toFixed(2)}%
            </td>
            <td>${asset.marketCap.toLocaleString()}</td>
            <td>${asset.volume24h.toLocaleString()}</td>
            <td>{asset.circulatingSupply.toLocaleString()}</td>
            <td>{asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</td>
            <td> <img src={chartMap[asset.symbol]} alt={`${asset.name} chart`} width="100" /></td>

          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default CryptoTable;
