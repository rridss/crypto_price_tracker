import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 65000,
      percentChange1h: 0.5,
      percentChange24h: -1.2,
      percentChange7d: 5.0,
      marketCap: 1200000000000,
      volume24h: 38000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      logo: 'src\bitcoin.png',
      chartImage: 'btcChart',
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 3200,
      percentChange1h: 0.7,
      percentChange24h: -0.8,
      percentChange7d: 3.5,
      marketCap: 400000000000,
      volume24h: 20000000000,
      circulatingSupply: 117000000,
      maxSupply: null,
      logo: 'src\eth.png',
      chartImage: 'btcChart',
    },
    {
        id: 3,
        name: 'Tether',
        symbol: 'USDT',
        price: 1.2,
        percentChange1h: 0.3,
        percentChange24h: -0.5,
        percentChange7d: 2.0,
        marketCap: 50000000000,
        volume24h: 1000000000,
        circulatingSupply: 45000000000,
        maxSupply: 100000000000,
        logo: 'src\sdt.png',
        chartImage: 'btcChart',
      },
      {
        id: 4,
        name: 'XRP',
        symbol: 'XRP',
        price: 1.2,
        percentChange1h: 0.3,
        percentChange24h: -0.5,
        percentChange7d: 2.0,
        marketCap: 50000000000,
        volume24h: 1000000000,
        circulatingSupply: 45000000000,
        maxSupply: 100000000000,
        logo: 'src\rp.png',
        chartImage: 'btcChart',
      },
      {
        id: 5,
        name: 'BNB',
        symbol: 'BNB',
        price: 150,
        percentChange1h: 0.2,
        percentChange24h: 0.4,
        percentChange7d: 1.5,
        marketCap: 10000000000,
        volume24h: 1500000000,
        circulatingSupply: 66000000,
        maxSupply: 84000000,
        logo: 'src\brb.png',
        chartImage: 'btcChart',
      },
      {
        id: 6,
        name: 'Solana',
        symbol: 'SOL',
        price: 2.4,
        percentChange1h: 1.1,
        percentChange24h: -0.3,
        percentChange7d: 3.2,
        marketCap: 78000000000,
        volume24h: 1200000000,
        circulatingSupply: 32000000000,
        maxSupply: 45000000000,
        logo: 'src\sol.png',
        chartImage: 'btcChart',
      }      

  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.assets.forEach((asset) => {
        asset.price += (Math.random() - 0.5) * 100;
        asset.percentChange1h = (Math.random() - 0.5) * 2;
        asset.percentChange24h = (Math.random() - 0.5) * 5;
        asset.volume24h += (Math.random() - 0.5) * 100000000;
      });
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;

export default cryptoSlice.reducer;
