import {S3Client} from "@aws-sdk/client-s3";
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


