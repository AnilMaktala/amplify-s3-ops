import React from "react";
import { useEffect } from "react";
import { Cache } from "aws-amplify";
import GoalList from "../GoalList";

function OutcomeGoalList() {

  return (
    
      <GoalList  goalMode="OUTCOME"/>
  );
}

export default OutcomeGoalList;