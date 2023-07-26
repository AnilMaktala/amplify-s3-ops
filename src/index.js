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
import Themes from './components/themes/Themes';
import Plans from './components/plans/plans';
import awsExports from "./aws-exports";
import Organizations from './components/organizations/organizations';
import Teams from './components/teams/teams';
import InputGoal from './components/inputgoal/inputgoal';
Amplify.configure(awsExports)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="projects" element={<Projects />} />
        <Route path="initiatives" element={<Initiatives />} />
        <Route path="themes" element={<Themes />} />
        <Route path="plans" element={<Plans />} />
        <Route path="organizations" element={<Organizations />} />
        <Route path="teams" element={<Teams />} />
        <Route path="inputgoal" element={<InputGoal />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
