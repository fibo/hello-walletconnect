import "./App.css";

import { Web3Modal } from "@web3modal/react";
import { WalletConnectButton } from "./components/WalletConnectButton";

const config = {
  projectId: process.env.REACT_APP_WALLETCONNECT_PROJECTID,
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: process.env.REACT_APP_WALLETCONNECT_PROJECTNAME,
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WalletConnectButton />
        <Web3Modal config={config} />
        <a
          className="App-link"
          href="https://github.com/WalletConnect/web3modal"
          target="_blank"
          rel="noopener noreferrer"
        >
          WalletConnect/web3modal
        </a>
      </header>
    </div>
  );
}

export default App;
