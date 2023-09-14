import React from "react";
import { Container, Header } from '@cloudscape-design/components';

export const DashboardView = () => {

    return (
        <Container
            header={
                <Header
                    variant="h2"
                    description=""
                >
                    Dashboard
                </Header>
            }
        >
            Quciksight goes here...
        </Container>
    );
}
