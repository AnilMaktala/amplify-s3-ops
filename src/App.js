import React, { useState, useEffect } from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import "./App.css";
import { Outlet } from "react-router-dom";
import GeneralHeader from "./generalheader";
import TopNavigationBar from "./topnavigationbar";
import SideNavigationBar from "./sidenavigationbar";
import {
  SpaceBetween,
  ContentLayout,
  AppLayout,
} from "@cloudscape-design/components";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [localRedirectSignIn, productionRedirectSignIn] =
  awsExports.oauth.redirectSignIn.split(",");

const [localRedirectSignOut, productionRedirectSignOut] =
  awsExports.oauth.redirectSignOut.split(",");

const updatedAwsConfig = {
  ...awsExports,
  oauth: {
    ...awsExports.oauth,
    redirectSignIn: isLocalhost
      ? localRedirectSignIn
      : productionRedirectSignIn,
    redirectSignOut: isLocalhost
      ? localRedirectSignOut
      : productionRedirectSignOut,
  },
};

Amplify.configure(updatedAwsConfig);

function App() {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [activeHref, setActiveHref] = React.useState("");

  let username = useState(["identity", "attributes", "email"]);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          console.log(event);
          console.log(data);
          getUser().then((userData) => setUser(userData));
          break;
        case "signOut":
          setUser(null);
          break;
        case "signIn_failure":
          console.log("Sign in failure", data);
          break;
      }
    });

    getUser().then((userData) => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then((userData) => userData)
      .catch(() => console.log("Not signed in"));
  }

  function clickMe() {
    console.log("click");
  }

  function getDisplayUsername() {
    if (user) {
      setDisplayName(user.username.split("_")[1]);
    }
  }

  const handleUserProfileAction = (event) => {
    if (event.detail.id === "signout" && user !== undefined) {
      Auth.signOut();
    }
  };

  return (
    <div className="App">
      <div>
        {user ? (
          <div></div>
        ) : (
          <button
            onClick={() =>
              Auth.federatedSignIn({ customProvider: "AmazonFederate" })
            }
          >
            Signin With Midway
          </button>
        )}

        {user ? (
          <>
            <AppLayout
              content={
                <ContentLayout
                  header={
                    <TopNavigationBar
                      user={user}
                      handleUserProfileAction={handleUserProfileAction}
                    />
                  }
                >
                  <SpaceBetween size="l">
                    <GeneralHeader />
                    <Outlet />
                  </SpaceBetween>
                </ContentLayout>
              }
              navigation={<SideNavigationBar activeHref={activeHref} />}
            />
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
