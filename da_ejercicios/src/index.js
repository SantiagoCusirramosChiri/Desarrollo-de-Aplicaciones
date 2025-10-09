import React from 'react';
import ReactDOM from 'react-dom/client';

import Dashboard from "./Proyecto/Dashboard";

import reportWebVitals from './original_structure/reportWebVitals';
import Contenido1 from "./Proyecto/contenido1";
import DataTable from "./Proyecto/tabla/DataTable";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Dashboard />
      <Contenido1 />
      <DataTable />

  </React.StrictMode>
);


reportWebVitals();
