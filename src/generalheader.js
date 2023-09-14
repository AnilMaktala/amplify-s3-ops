import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Toggle,
  Container,
  ColumnLayout,
  Box,
  Header,
  StatusIndicator,
  SpaceBetween,
} from "@cloudscape-design/components";
import { Cache } from "aws-amplify";
import { fetchActivePlan } from "./common/graphqlHelper";
import { OP2Cache } from "./common/cacheHelper";

function GeneralHeader() {
  const [activePlan, setActivePlan] = useState({});
  const [activeOrg, setActiveOrg] = useState({});
  const [activeIsb, setActiveIsb] = useState(Cache.getItem("isBizOps"));
  const [overActiveIsb, setOverActiveIsb] = useState(
    OP2Cache.getItem("overIsBizOps")
  );

  const navigate = useNavigate();

  useEffect(() => {
    var org = Cache.getItem("activeOrg");
    if (org) {
      console.log("GO:");
      setActiveOrg(org);
      Cache.removeItem("activePlan");
      Cache.removeItem("editId");
      Cache.removeItem("nextToken");

      fetchActivePlan().then((res) => {
        setActivePlan(res);
        Cache.setItem("activePlan", res);
      });
    } else {
      console.log("NO:");
    }
  }, []);

  return (
    <Container header={<Header variant="h2">S3</Header>}>
      <ColumnLayout columns={4} variant="text-grid">
        <div>
          <Box variant="awsui-key-label">Active Plan</Box>
          <div>{activePlan.title}</div>
        </div>
        <div>
          <Box variant="awsui-key-label">User Organization</Box>
          <div>{activeOrg.name}</div>
        </div>
        <div>
          <SpaceBetween direction="horizontal" size="l">
            <Box variant="awsui-key-label">BizOps User</Box>
            <StatusIndicator
              type={activeIsb || overActiveIsb ? "success" : "error"}
            ></StatusIndicator>

            <Toggle
              onChange={({ detail }) => {
                setOverActiveIsb(detail.checked);
                OP2Cache.setItem("overIsBizOps", detail.checked);
                navigate(0);
              }}
              checked={activeIsb || overActiveIsb}
            >
              Toggle
            </Toggle>
          </SpaceBetween>
        </div>
        <div>
          <Box variant="awsui-key-label">Pending maintenance</Box>
          <div>None</div>
        </div>
      </ColumnLayout>
    </Container>
  );
}

export default GeneralHeader;
