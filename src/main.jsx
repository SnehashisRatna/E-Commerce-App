import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';
import {ProductContextProvider} from './Context/ProductContextProvider.jsx';
// import { AppProvider } from './Context/productcontext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <React.StrictMode>
  <ProductContextProvider>
    <App />
  </ProductContextProvider>
    
  </React.StrictMode>,
  </BrowserRouter>
    
)
