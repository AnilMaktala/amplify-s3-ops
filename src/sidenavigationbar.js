import React from "react";
import { SideNavigation } from "@cloudscape-design/components";

const SideNavigationBar = ({ activeHref }) => {
  const navItems = [
    {
      type: "section",
      text: "Start Here",
      defaultExpanded: false,
      items: [
        { type: "link", text: "Overview", href: "/overview" },
        { type: "link", text: "User Guide", href: "/guide" },
        { type: "link", text: "Filter Modes", href: "/searching" },
      ],
    },
    {
      type: "section",
      text: "Records",
      items: [
        { type: "link", text: "Organizations", href: "/organizations" },
        { type: "link", text: "Projects", href: "/projects" },
        { type: "link", text: "Initiatives", href: "/initiatives" },
        { type: "link", text: "Themes", href: "/themes" },
        { type: "link", text: "Plans", href: "/plans" },
        { type: "link", text: "Persons", href: "/persons" },
      ],
    },
    {
      type: "section",
      text: "Goals",
      items: [
        { type: "link", text: "Outcome", href: "/goal/outcome" },
        { type: "link", text: "Output", href: "/goal/output" },
        { type: "link", text: "Input", href: "/goal/input" },
      ],
    },
    {
      type: "section",
      text: "Analysis",
      items: [
        { type: "link", text: "By Initiative", href: "/byinitiative" },
        { type: "link", text: "By Bucket", href: "/bybucket" },
        { type: "link", text: "Dashboard", href: "/dashboard" },
      ],
    },
  ];

  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "/", text: "Operational Planning" }}
      items={navItems}
    />
  );
};

export default SideNavigationBar;
