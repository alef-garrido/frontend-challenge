import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/widgets/CounterApp';
import StorePage from "./pages"

import './styles.css';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <StorePage />
    </React.StrictMode>
);


