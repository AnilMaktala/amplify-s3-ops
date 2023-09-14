import React from "react";
import { useEffect } from "react";
import { Cache } from "aws-amplify";
import GoalList from "../GoalList";

function InputGoalList() {
  return (
    <GoalList goalMode="INPUT" />
);
}

export default InputGoalList;