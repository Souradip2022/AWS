import {ListObjectsV2Command} from "@aws-sdk/client-s3";
import {s3Client} from "../index.js";
import {config} from "dotenv";
config();
// console.log(process.env.AWS_ACCESS_KEY_ID);

async function listObjects() {

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

listObjects();
