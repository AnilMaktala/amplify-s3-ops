import React, { useState, useEffect, useMemo } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { NavBarHeader2 } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link, Outlet } from "react-router-dom";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth"
import TopNavigation, { TopNavigationProps } from "@cloudscape-design/components/top-navigation";
import awsExports from './aws-exports';
Amplify.configure(awsExports);




function App() {
  const [user, setUser] = useState(null);
  let username = useState(['identity', 'attributes', 'email'])
  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          console.log(event)
          console.log(data)
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }
  function clickMe() {
    console.log('click');
  }

  const utilities = useMemo(() => {
    const menu = []

    user &&
      menu.push({
        type: "button",
        text: "Projects",
        href: "./Projects",
        external: false
      })
    user &&
      menu.push({
        type: "button",
        text: "Initiatives",
        href: "./Initiatives",
        external: false
      })
    user &&
      menu.push({
        type: "button",
        text: "Themes",
        href: "./Themes",
        external: false
      })
    user &&
      menu.push({
        type: "button",
        text: "Plans",
        href: "./plans",
        external: false,
      })
    user &&
      menu.push({
        type: "button",
        text: "Organizations",
        href: "./organizations",
        external: false,
      })
    user &&
      menu.push({
        type: "button",
        text: "Teams",
        href: "./teams",
        onClick: Auth.signOut,
        external: false,
      })
    user &&
      menu.push({
        type: "menu-dropdown",
        text: "Goals",
        ariaLabel: "Goals",
        title: "Goals",
        items: [
          {
            id: "inputgoal",
            text: "Input Goal",
            href: "./inputgoal",
            external: false,
          },
          {
            id: "outputgoal",
            text: "Output Goal",
            href: "./outputgoal",
            external: false,
          }
        ]
      })
    user &&
      menu.push({
        type: "menu-dropdown",
        text: user.username,
        description: user.email,
        iconName: "user-profile",
        items: [{ id: "signout", text: "Sign out" }],
        onItemClick: ''
      })

    return menu
  }, [
    user,
   Auth
  ])

  return (

    <div className="App">
      <div>

        {user ? (
          <button onClick={() => Auth.signOut()}>Sign Out</button>
        ) : (
          <button onClick={() => Auth.federatedSignIn()}>Federated Sign In</button>
        )}

        {user ? (
          <TopNavigation
            identity={{
              href: "#",
              title: "Operations",
              logo: {
                src:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDNweCIgaGVpZ2h0PSIzMXB4IiB2aWV3Qm94PSIwIDAgNDMgMzEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGZpbGw9IiMyMzJmM2UiIHN0cm9rZT0iI2Q1ZGJkYiIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0MiIgaGVpZ2h0PSIzMCIgcng9IjIiPjwvcmVjdD4KICAgICAgICA8dGV4dCBmb250LWZhbWlseT0iQW1hem9uRW1iZXItUmVndWxhciwgQW1hem9uIEVtYmVyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjkiIHk9IjE5Ij5Mb2dvPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo=",
                alt: "Operations"
              }
            }}
            utilities={utilities}
          />
        ) : (
          <div></div>
        )}
      </div>


      <Outlet />

    </div>

  );
}

export default App;
