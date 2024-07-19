import {DeleteObjectCommand, ListObjectsV2Command, S3Client} from "@aws-sdk/client-s3";
import {config} from "dotenv";
config();
// console.log(process.env.AWS_ACCESS_KEY_ID);

export const s3Client = new S3Client({
  credentials: {
    accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
    secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY}`
  },
  region: "ap-south-1",
});


/*async function listObjects() {

  try{
    const listObjectsCommand = new ListObjectsV2Command({
      Bucket: "nodejs-s3bucket-souradip",
    });


    const response = await s3Client.send(listObjectsCommand);
    console.log(response);
  } catch (error) {
    console.error("Error listing objects:", error);
  }
}

listObjects();*/

async function deleteBucketCommand() {
  const deleteObjectCommand = new DeleteObjectCommand({
    Bucket: "nodejs-s3bucket-souradip",
    Key: "startupIndia.png"
  });

  const response = await s3Client.send(deleteObjectCommand);
  console.log(response)
}

deleteBucketCommand();
