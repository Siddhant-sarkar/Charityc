import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sepolia } from "@thirdweb-dev/chains";
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider activeChain={Sepolia} clientId="r2q11-AsTbXu9iA6IaxlC1FPvWk_8WdWnxgBdzNFalFyOe9hS_VazLAzMG4rWs5gorj-RBaau1tfOXywFVOYtw">
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)