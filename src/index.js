import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import awsExports from "./aws-exports";

import ProjectList from "./components/projects/ProjectList";
import InitiativeList from "./components/initiatives/InitiativeList";
import ThemeList from "./components/themes/ThemeList";
//import PlanList from "./components/plans/PlanList";
import PersonList from "./components/persons/PersonList";
//import OrganizationList from "./components/organizations/OrganizationList";
import InputGoalList from "./components/goals/input/InputGoalList";
import OutputGoalList from "./components/goals/output/OutputGoalList";
import OutcomeGoalList from "./components/goals/outcome/OutcomeGoalList";
//import { OverviewDoc } from "./components/docs/OverviewDoc";
import { InitiativeChart } from "./components/analysis/InitiativeChart";
import { BucketChart } from "./components/analysis/BucketChart";
import { DashboardView } from "./components/analysis/DashboardView";
Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="overview" element={<OverviewDoc />} /> */}

        <Route path="projects" element={<ProjectList />} />
        <Route path="initiatives" element={<InitiativeList />} />
        <Route path="themes" element={<ThemeList />} />
        {/* <Route path="plans" element={<PlanList />} /> */}
        {/* <Route path="organizations" element={<OrganizationList />} /> */}
        <Route path="persons" element={<PersonList />} />

        <Route path="goal/outcome" element={<OutcomeGoalList />} />
        <Route path="goal/input" element={<InputGoalList />} />
        <Route path="goal/output" element={<OutputGoalList />} />

        <Route path="byinitiative" element={<InitiativeChart />} />
        <Route path="bybucket" element={<BucketChart />} />
        <Route path="dashboard" element={<DashboardView />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
