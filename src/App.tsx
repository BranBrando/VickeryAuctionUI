import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WagmiConfig, configureChains, createConfig, mainnet, sepolia } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import Main from './Main';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia],
  [publicProvider()],
)


const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})

function App() {
  return (
    <WagmiConfig config={config}>
      <Main/>
    </WagmiConfig>
  );
}

export default App;
