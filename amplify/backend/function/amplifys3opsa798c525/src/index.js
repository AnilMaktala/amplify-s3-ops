/* Amplify Params - DO NOT EDIT
    API_AMPLIFYS3OPS_GRAPHQLAPIIDOUTPUT
    API_AMPLIFYS3OPS_PERSONTABLE_ARN
    API_AMPLIFYS3OPS_PERSONTABLE_NAME
    ENV
    REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {

    let date = new Date();

    if (event.request.userAttributes.sub) {

        let params = {
            Item: {
                'id': { S: event.request.userAttributes.sub },
                'alias': { S: event.request.userAttributes.email.split('@')[0] },
                'name': { S: event.request.userAttributes.email.split('@')[0] },
                'email': { S: event.request.userAttributes.email },
                'createdAt': { S: date.toISOString() },
                'updatedAt': { S: date.toISOString() },
            },
            TableName: process.env.API_AMPLIFYS3OPS_PERSONTABLE_NAME
        };
        console.log(params);

        // Call DynamoDB
        try {
            await ddb.putItem(params).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DynamoDB");
        context.done(null, event);
    }
};