import React, { useState } from "react";
import { View, Button, TextField } from "@aws-amplify/ui-react";

export default function ProjectForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
  };
  return (
    <div>
      <View width="50%" maxWidth="50rem" padding={{ base: 0, large: "1rem" }}>
        <TextField
          name="firstName"
          label="First Name"
          type="email"
          onChange={(e) => setFirstName(e.target.value)}
          isRequired={true}
        />
        <TextField
          lname="lastName"
          label="Last Name"
          type="email"
          onChange={(e) => setLastName(e.target.value)}
          isRequired={true}
        />
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </View>
    </div>
  );
}
