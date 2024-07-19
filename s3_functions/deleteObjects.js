import {s3Client} from "../index.js";
import {DeleteObjectCommand} from "@aws-sdk/client-s3";

async function deleteBucketCommand() {
  const deleteObjectCommand = new DeleteObjectCommand({
    Bucket: "nodejs-s3bucket-souradip",
    Key: "startupIndia.png"
  });

  const response = await s3Client.send(deleteObjectCommand);
  console.log(response)
}

deleteBucketCommand();