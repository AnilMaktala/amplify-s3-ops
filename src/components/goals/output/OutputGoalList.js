import React from "react";
import { useEffect } from "react";
import { Cache } from "aws-amplify";
import GoalList from "../GoalList";

function OutputGoalList() {
  return (
      <GoalList goalMode="OUTPUT" />
  );
}
export default OutputGoalList;