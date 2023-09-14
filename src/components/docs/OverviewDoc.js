import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import { TextContent } from '@cloudscape-design/components';
import remarkGfm from 'remark-gfm'

export const OverviewDoc = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        setText(docText)
      }, []);
    
    return (
        <>
        <TextContent>
        <ReactMarkdown children={text} remarkPlugins={[remarkGfm]}></ReactMarkdown>
        </TextContent>
        </>)
}

const docText = `
[ Amazon Confidential ]  

# S3 OP Headcount & Roadmap Tool Evaluation V2   

Date: August 2023   
Status: Draft   
Archived: [S3 OP Headcount & Roadmap Tool Evaluation V1](https://quip-amazon.com/GbJVAA9Eg9vA)   

The S3 organization is unhappy with the current tools used to generate and manage our OP Headcount & Roadmap plans  - an unwieldy combination of Roster, Sharepoint, Excel and Kingpin glued together with a fragile collection of Python, VBasic and PowerShell scripts plus Amazon Workspaces instances to mitigate for the associated nuances and issues when working with Sharepoint for our broad base of Apple Laptop users. The AWS Amplify team has kindly offered to quickly build a prototype for a new comprehensive tool - using the AWS Amplify/AppSync platform - that S3 can take over and complete if the prototype efforts are successful.   


**Model:**   

* Plan - root object represents an OP Plan: eg OP2 2023, OP1 2024, OP2 2024, etc [ every other data item must be directly or indirectly owned by a one and only one Plan ]   
* Person - represents any person in any role in S3 [ derived from Roster snapshot import if at all possible ]   
* Organization - represents functional groups: eg Storage, Webserver, Index, Compute, Bizops, etc [ see [LINK](https://share.amazon.com/sites/S3/ProductPlanning/2024/_layouts/15/start.aspx#/Lists/Orgs/Allitemsg.aspx) ]   
* Team - represents a collection of Persons belonging to an Organization: eg Index→BrickManager, Index→KFC, etc    
* Theme - represents a collection of Initiatives: eg Alfa-Lyrae, Security & Compliance, Performance, System Operations, etc [ see [LINK](https://share.amazon.com/sites/S3/ProductPlanning/2024/_layouts/15/start.aspx#/Lists/Categories/Allitemsg.aspx) ]   
* Initiative - represents a collection of Projects: eg 503 Reduction, Software Patching, Host Patching etc [ see [LINK](https://share.amazon.com/sites/S3/ProductPlanning/2024/_layouts/15/start.aspx#/Lists/Topn%20Initiatives/Allitemsg.aspx) ] - Initiatives can be “TopN” initiatives (ie be pushed down ) or be “OrgN” Initiatives (ie be pushed up) with an XOrg = TRUE/FALSE attribute   
* Project - represents an allocation of headcount from a Team to a deliverable, outcome or task: eg Salty V2 Adoption, Graviton for Object Lambda, etc;    
* Goal - represents a target metric or deliverable to be achieved, aka Kingpin items: 1) a “Theme” will have a “Outcome Goal”; 2) an “Initiative” will have an “Output Goal” which is a child of an Outcome Goal; and a “Project“ will have a ”Input Goal“ which is a child of an Output Goal. In Kingpin terms, Outcome Goals will typically be ”S-Team“ or ”AWS“ goals, Output Goals will be ”AWS“ or ”S3“ goals, and Input Goals will be ”Team“ goals.   

**Actors:**  

* Administrators - responsible for reviewing and revising the data in the static lists - Plans, Persons, Organizations, Teams, Themes   
* Leaders - responsible for reviewing and revising “TopN” and “OrgN” Initiatives and “Output” Goals   
* Managers - responsible for reviewing and revising Projects, Initiatives and “Input” Goals   
* Team Leads - TBD   

**Views:**   

* Home: top level app navigation with selection of and CRUD for Plan items [ basically everything must be directly or indirectly related to a Plan item ]   
* Lists: CRUD pages for Persons, Organizations, Teams [ must have a Plan selected before navigating here ]   
* Ideally import and export (from/to CSV) files would be helpful   
* Projects: CRUD pages for Themes, Initiatives, Projects, Goals [ must have a Plan selected before navigating here ]   
* Ideally insert/update data entry is a grid-view that allows bulk changes with a final “cancel” or “submit” action   
* Delete actions can be singular based on selected data row   
* Ideally import and export (from/to CSV) files would be helpful   
* Roadmaps: PIVOT pages that “slice & dice” Plan data to present various aggregated views - eg Running Project Headcount Total by related Initiative ordered by Initiative rank for all or selected Organization or Team.   
* Dashboard: AUDIT pages that assert, assess or verify various conditions or constraints set for the Plan - eg that for each TopN Initiative has at least one Project item; etc    

**Flows:**   

* New OP cycle begins: an Administrator creates a new Plan record (eg OP2 2024) and pre-loads the initial static lists (Persons, Organizations, Teams, Themes, TopN Initiatives) for that Plan   
* Set leadership priorities: a Plan is selected and multiple Leaders can review and revise “TopN” Initiatives and “Output” Goals   
* Set team projects: a Plan, default Organization and default Team is selected and multiple Managers can review and revise “XOrg” Initiatives, Projects and link with “Input” Goals   
* Review roadmap: a Plan, optional Organization and optional Team is selected and summary (PIVOT) views of the aggregated Project headcount allocation is presented   
* Review dashboard:  a Plan, optional Organization and optional Team is selected and summary (AUDIT) views of the aggregated Plan headcount allocation is presented   
`;

