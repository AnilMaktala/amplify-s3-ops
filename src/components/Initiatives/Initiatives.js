import React from 'react';
import { useState } from 'react';
import { ProjectsForm1 } from '../../ui-components';
import ProjectForm from '../../forms/project-form';
import { ProjectSampleForm } from '../../ui-components';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createProject } from '../../graphql/mutations'
import InitiativeList from '../InitiativeList/InitiativeList'
function Initiatives() {

   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [rank, setRank] = useState("");
   const [priority, setPriority] = useState("");
   const [headcount, setHeadcount] = useState("");

   const ProjectsForm1Overrides = {
      "Field0": {
         onChange: (event) =>
            setTitle(event.target.value)
      }
   }
   return (

      <>

         <InitiativeList />
      </>
   );
}


export default Initiatives;
