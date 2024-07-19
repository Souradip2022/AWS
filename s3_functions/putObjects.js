import {s3Client} from "../index.js";
import {PutObjectCommand} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";

async function putObject(key, contentType) {
  const putObjectCommand = new PutObjectCommand({
    Bucket: "nodejs-s3bucket-souradip",
    Key: key,
    ContentType: contentType
  });

  const url = await getSignedUrl(s3Client, putObjectCommand);
  return url;
}

async function initPutObject() {
  console.log("Signed url for putObject: ", await  putObject(`/content/image-${Date.now()}`, `image/x-png`));
}

initPutObject();