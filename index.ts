const { S3Client, AbortMultipartUploadCommand } = require('@aws-sdk/client-s3');
const { TextractClient, AnalyzeDocumentCommand } = require('@aws-sdk/client-textract');
const fs = require('fs');

// a client can be shared by difference commands.
const s3Client = new S3Client({ region: 'eu-west-1' });
const textClient = new TextractClient({ region: 'eu-west-1' });

const myPic = fs.readFileSync('./test.png');
const myDoc = fs.readFileSync('./test.pdf');

// const textParams = {
//     Document: {
//         /* required */ Bytes: Buffer.from(myPic) /* Strings will be Base-64 encoded on your behalf */,
//     },
//     FeatureTypes: ['TABLES'],
// };

const s3Params = { Bucket: 'jw-aws-textract-bucket', Key: 'test', Body: myDoc };

// const command = new AnalyzeDocumentCommand(textParams);

// const data = textClient
//     .send(command)
//     .then((data: any) => console.log(data))
//     .catch((error: any) => {
//         throw new Error(error);
//     })
//     .finally(() => console.log('Done'));
