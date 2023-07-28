import React from 'react';
import { useState } from 'react';
import { ProjectsForm1 } from '../../ui-components';
import ProjectForm from '../../forms/project-form';

import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createProject } from '../../graphql/mutations'
import ThemeList from './organizationList';
function Organizations() {

   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [rank, setRank] = useState("");
   const [priority, setPriority] = useState("");
   const [headcount, setHeadcount] = useState("");


   return (

      <>

         <ThemeList />
      </>
   );
}


export default Organizations;
