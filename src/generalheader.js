import React from 'react';
import { Container, ColumnLayout, Box, Header, StatusIndicator } from '@cloudscape-design/components';

const GeneralHeader = () => (
    <Container header={<Header variant="h2">S3 Organization</Header>}>
        <ColumnLayout columns={4} variant="text-grid">
            <div>
                <Box variant="awsui-key-label">Plan</Box>
                <div>OP2-2024</div>
            </div>
            <div>
                <Box variant="awsui-key-label">DB instance class</Box>
                <div>db.t2.large</div>
            </div>
            <div>
                <Box variant="awsui-key-label">DB instance status</Box>
                <StatusIndicator type="success">Available</StatusIndicator>
            </div>
            <div>
                <Box variant="awsui-key-label">Pending maintenance</Box>
                <div>None</div>
            </div>
        </ColumnLayout>
    </Container>
);

export default GeneralHeader;
