import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './components/Projects/Projects';
import Initiatives from './components/Initiatives/Initiatives';
import awsExports from "./aws-exports"
Amplify.configure(awsExports)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="projects" element={<Projects />} />
        <Route path="initiatives" element={<Initiatives />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
