import { resolve } from "path";

import dotenv from "dotenv";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

dotenv.config({ path: resolve(__dirname, "../../../.env") });

export const imageAdapter = s3Adapter({
  bucket: process.env.S3_IMAGE_BUCKET,
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_ID,
      secretAccessKey: process.env.S3_ACCESS_SECRET,
    },
    endpoint: process.env.S3_ENDPOINT,
    forcePathStyle: true,
    region: process.env.S3_REGION,
  },
});
