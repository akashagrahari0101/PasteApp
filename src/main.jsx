
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import './index.css';
import App from './App.jsx';
import { store } from './store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
    </Provider>
  </StrictMode>
);
