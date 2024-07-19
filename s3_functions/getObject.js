import {s3Client} from "../index.js";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
import {GetObjectCommand} from "@aws-sdk/client-s3";

export async function getObjectUrl(key) {
  const getObjectCommand = new GetObjectCommand({
    Bucket: "nodejs-s3bucket-souradip",
    Key: key
  });
  const url = await getSignedUrl(s3Client, getObjectCommand);
  return url;
}

async function initGetObject() {
  console.log("Signed url for startupIndia.png: ", await getObjectUrl("/content/image-1721401489322"));
}

initGetObject();