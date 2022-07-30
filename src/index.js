import React from 'react';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createRoot} from "react-dom/client";
import { UserProvider } from "./contexts/user.context";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <BrowserRouter> 
            <UserProvider>
                <App /> 
            </UserProvider>
        </BrowserRouter>
   </React.StrictMode>
);