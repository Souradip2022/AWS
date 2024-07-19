import {ListObjectsV2Command} from "@aws-sdk/client-s3";
import {s3Client} from "../index.js";

async function listObject() {
  const listObjectCommand = new ListObjectsV2Command({
    Bucket: "nodejs-s3bucket-souradip",
  })

  const response = await s3Client.send(listObjectCommand);
  return response;
}

async function initListObject() {
  console.log(await listObject());
}

initListObject();