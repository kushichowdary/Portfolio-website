import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SpeedInsights></SpeedInsights>
    <App />
  </React.StrictMode>
);
