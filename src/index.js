import React from 'react';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createRoot} from "react-dom/client";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <BrowserRouter> 
            <UserProvider>
                <ProductsProvider>
                    <CartProvider>
                        <App /> 
                    </CartProvider>
                </ProductsProvider>
            </UserProvider>
        </BrowserRouter>
   </React.StrictMode>
);