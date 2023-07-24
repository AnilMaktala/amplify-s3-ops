import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { NavBarHeader2 } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBarHeader2 width="100%" />

      <Outlet />

    </div>

  );
}

export default withAuthenticator(App);
