import { resolve } from "path";

import dotenv from "dotenv";
import { buildConfig } from "payload/config";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import {
  HTMLConverterFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { webpackBundler } from "@payloadcms/bundler-webpack";

import { Image } from "./collections/Image";
import { imageAdapter } from "./adapters/buckets";
import { Chunk } from "./collections/Chunk";

import { Navigation } from "./globals/Navigation";

dotenv.config({ path: resolve(__dirname, "../../.env") });

export default buildConfig({
  admin: { bundler: webpackBundler() },
  collections: [
    Chunk,
    Image,
  ],
  db: mongooseAdapter({ url: process.env.DATABASE_URI }),
  editor: lexicalEditor({
    features: (
      { defaultFeatures },
    ) => [...defaultFeatures, HTMLConverterFeature({})],
  }),
  globals: [
    Navigation,
  ],
  plugins: [
    cloudStorage({
      collections: {
        "image": { adapter: imageAdapter },
      },
    }),
  ],
  upload: {
    limits: {
      fileSize: 20_971_520, // 20MB
    },
  },
  typescript: {
    outputFile: "../types/payload-types.ts",
  },
});
