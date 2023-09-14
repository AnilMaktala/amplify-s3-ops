import React, { useState, useEffect } from 'react';
import { FormField, Input, Form, ColumnLayout, Textarea } from "@cloudscape-design/components";
import { Button, Header, Container, SpaceBetween } from '@cloudscape-design/components';
import { Cache } from 'aws-amplify'

import { fetchTheme, modifyTheme, makeTheme } from '../../common/graphqlHelper';
import { checkNotEmpty } from '../../common/validationHelper';

function ThemeForm({ setShowForm, trigger, plan, org, isb, editId }) {
  const [planId, setThemeId] = useState();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const load = async (id) => {
    fetchTheme(id).then((res) => { setThemeState(res) });
  };

  /* fetch plan when component loads if edit */
  useEffect(() => {
    let plan = Cache.getItem("activePlan");
    if (plan) {
      setThemeId(plan.id);
    } else {
      handleCancel();
    }
    if (editId) {
      setId(editId);
      load(editId);
    }
  }, []);

  async function setThemeState(themeData) {
    setTitle(themeData.title);
    setDescription(themeData.description);
  }
  const handleCancel = () => {
    setShowForm(false) // Hide the form
  };

  function handleChange() {
    if (!(checkNotEmpty(title))) {
      let update = {
        title: title,
        description: (description === "" ? title : description),
        themePlanId: planId
      };
      try {
        let id = Cache.getItem("editId");
        if (id) { modifyTheme({ ...update, id }).then((res) => { console.log(res); }); }
        else { makeTheme(update).then((res) => { console.log(res); }); }
      }
      catch (e) { console.log("Make/Update Theme: " + e) }
    }
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleChange();
        setShowForm(false);
        trigger();
      }}
    >
      <Form>
        <Container header={<Header variant="h2"
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button formAction="submit" type="submit" onClick={handleCancel} variant="link"> Cancel</Button>
              <Button formAction="submit" variant="primary">Submit</Button>
            </SpaceBetween>
          }>
          {editId ? "Edit Theme" : "Add Theme"}
        </Header>}>
          <ColumnLayout borders="vertical" columns={2}>
            <SpaceBetween direction="vertical" size="l">
              <FormField label="Title"
                errorText={checkNotEmpty(title)}
              >
                <Input
                  type="text"
                  name="title"
                  value={title}
                  onChange={({ detail }) => {
                    setTitle(detail.value);
                  }}
                />
              </FormField>
            </SpaceBetween>
            <FormField label="Description">
              <Textarea
                rows={5}
                name="description"
                value={description}
                onChange={({ detail }) => {
                  setDescription(detail.value);
                }}
              />
            </FormField>
          </ColumnLayout>
        </Container>
      </Form>
    </form>
  );
}

export default ThemeForm;
