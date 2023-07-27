import { Amplify, Auth } from 'aws-amplify';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { NavBarHeader2 } from './ui-components'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link, Outlet } from "react-router-dom";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth"
import TopNavigation from "@cloudscape-design/components/top-navigation";
import awsExports from './aws-exports';
Amplify.configure(awsExports);
function App({ signOut, user }) {
  const username = "";
  console.log(username);
  function onClick() {
    signOut();
  }

  // [

  //   {
  //     type: "button",
  //     text: "Projects",
  //     href: "./Projects",
  //     external: false,
  //     externalIconAriaLabel: " (opens in a new tab)"
  //   },
  //   {
  //     type: "button",
  //     text: "Initiatives",
  //     href: "./Initiatives",
  //     external: false,
  //     externalIconAriaLabel: " (opens in a new tab)"
  //   },
  //   {
  //     type: "button",
  //     text: "Themes",
  //     href: "./Themes",
  //     external: false,
  //     externalIconAriaLabel: " (opens in a new tab)"
  //   },
  //   {
  //     type: "button",
  //     text: "Plans",
  //     href: "./plans",
  //     external: false,
  //     externalIconAriaLabel: " (opens in a new tab)"
  //   },
  //   {
  //     type: "button",
  //     text: "Organizations",
  //     href: "./organizations",
  //     external: false,
  //     externalIconAriaLabel: " (opens in a new tab)"
  //   },
  //   {
  //     type: "button",
  //     text: "Teams",
  //     href: "./teams",
  //     external: false,
  //     externalIconAriaLabel: " (opens in a new tab)"
  //   },
  //   {
  //     type: "menu-dropdown",
  //     text: "Goals",
  //     ariaLabel: "Goals",
  //     title: "Goals",
  //     items: [
  //       {
  //         id: "inputgoal",
  //         text: "Input Goal",
  //         href: "./inputgoal",
  //         external: false,
  //       },
  //       {
  //         id: "outputgoal",
  //         text: "Output Goal",
  //         href: "./outputgoal",
  //         external: false,
  //       }
  //     ]
  //   },
  //   {
  //     type: "menu-dropdown",
  //     iconName: "settings",
  //     ariaLabel: "Settings",
  //     title: "Settings",
  //     items: [
  //       {
  //         id: "settings-org",
  //         text: "Organizational settings"
  //       },
  //       {
  //         id: "settings-project",
  //         text: "Project settings"
  //       }
  //     ]
  //   },
  //   {
  //     type: "menu-dropdown",
  //     text: "",
  //     description: "email@example.com",
  //     iconName: "user-profile",
  //     items: [
  //       { id: "profile", text: "Profile" },
  //       { id: "preferences", text: "Prefezrences" },
  //       { id: "security", text: "Security" },
  //       {
  //         id: "support-group",
  //         text: "Support",
  //         items: [
  //           {
  //             id: "documentation",
  //             text: "Documentation",
  //             href: "#",
  //             external: true,
  //             externalIconAriaLabel:
  //               " (opens in new tab)"
  //           },
  //           { id: "support", text: "Support" },
  //           {
  //             id: "feedback",
  //             text: "Feedback",
  //             href: "#",
  //             external: true,
  //             externalIconAriaLabel:
  //               " (opens in new tab)"
  //           }
  //         ]
  //       },
  //       { id: "signout", onItemclick: clickMe, text: "Sign out" }
  //     ]
  //   }
  // ]
  return (

    <div className="App">
      <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button>
      <button
        onClick={() =>
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Facebook
          })
        }
      >
        Open Facebook
      </button>
      <button onClick={() => Auth.federatedSignIn({ customProvider: "AmazonFederate" })}>Signin With Midway</button>
      <button
        onClick={() =>
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google
          })
        }
      >
        Open Google
      </button>
      <button
        onClick={() =>
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Amazon
          })
        }
      >
        Open Amazon
      </button>
      <button
        onClick={() =>
          Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Apple
          })
        }
      >
        Open Apple
      </button>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
      <NavBarHeader2 width="100%" />
      <TopNavigation username={username}
        identity={{
          href: "#",
          title: "Operations",
          logo: {
            src:
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDNweCIgaGVpZ2h0PSIzMXB4IiB2aWV3Qm94PSIwIDAgNDMgMzEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGZpbGw9IiMyMzJmM2UiIHN0cm9rZT0iI2Q1ZGJkYiIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0MiIgaGVpZ2h0PSIzMCIgcng9IjIiPjwvcmVjdD4KICAgICAgICA8dGV4dCBmb250LWZhbWlseT0iQW1hem9uRW1iZXItUmVndWxhciwgQW1hem9uIEVtYmVyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjkiIHk9IjE5Ij5Mb2dvPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo=",
            alt: "Operations"
          }
        }}
        utilities={[
          {
            type: "button",
            text: "Projects",
            href: "./Projects",
            external: false,
            externalIconAriaLabel: " (opens in a new tab)"
          },
          {
            type: "button",
            text: "Initiatives",
            href: "./Initiatives",
            external: false,
            externalIconAriaLabel: " (opens in a new tab)"
          },
          {
            type: "button",
            text: "Themes",
            href: "./Themes",
            external: false,
            externalIconAriaLabel: " (opens in a new tab)"
          },
          {
            type: "button",
            text: "Plans",
            href: "./plans",
            external: false,
            externalIconAriaLabel: " (opens in a new tab)"
          },
          {
            type: "button",
            text: "Organizations",
            href: "./organizations",
            external: false,
            externalIconAriaLabel: " (opens in a new tab)"
          },
          {
            type: "button",
            text: "Teams",
            href: "./teams",
            external: false,
            externalIconAriaLabel: " (opens in a new tab)"
          },
          {
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
          },
          {
            type: "menu-dropdown",
            iconName: "settings",
            ariaLabel: "Settings",
            title: "Settings",
            items: [
              {
                id: "settings-org",
                text: "Organizational settings"
              },
              {
                id: "settings-project",
                text: "Project settings"
              }
            ]
          },
          {
            type: "menu-dropdown",
            text: "{  }",
            description: "email@example.com",
            iconName: "user-profile",
            items: [
              { id: "profile", text: "Profile" },
              { id: "preferences", text: "Prefezrences" },
              { id: "security", text: "Security" },
              {
                id: "support-group",
                text: "Support",
                items: [
                  {
                    id: "documentation",
                    text: "Documentation",
                    href: "#",
                    external: true,
                    externalIconAriaLabel:
                      " (opens in new tab)"
                  },
                  { id: "support", text: "Support" },
                  {
                    id: "feedback",
                    text: "Feedback",
                    href: "#",
                    external: true,
                    externalIconAriaLabel:
                      " (opens in new tab)"
                  }
                ]
              },
              { id: "signout", onItemClick: signOut, text: "Sign out" }
            ]
          }
        ]}
      />


      <Outlet />

    </div>

  );
}

export default App;
