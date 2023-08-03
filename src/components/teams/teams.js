import React from "react";
import { useState } from "react";
import { ProjectsForm1 } from "../../ui-components";
import ProjectForm from "../../forms/project-form";
import { ProjectSampleForm } from "../../ui-components";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createProject } from "../../graphql/mutations";
import TeamList from "./teamList";
function Organizations() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rank, setRank] = useState("");
  const [priority, setPriority] = useState("");
  const [headcount, setHeadcount] = useState("");

  return (
    <>
      <TeamList />
    </>
  );
}

export default Organizations;
