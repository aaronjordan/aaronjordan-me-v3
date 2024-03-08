import { resolve } from "path";

import dotenv from "dotenv";
import { buildConfig } from "payload/config";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import {
  BlocksFeature,
  HTMLConverterFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { webpackBundler } from "@payloadcms/bundler-webpack";

import { imageAdapter } from "./adapters/buckets";
import { Popover, PopoverConverter } from "./blocks/Popover";
import { Chunk } from "./collections/Chunk";
import { Image } from "./collections/Image";
import { FooterLinks } from "./globals/FooterLinks";
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
    ) => [
      ...defaultFeatures,
      BlocksFeature({ blocks: [Popover] }),
      HTMLConverterFeature({
        converters: ({ defaultConverters }) => [
          ...defaultConverters,
          PopoverConverter,
        ],
      }),
    ],
  }),
  globals: [
    FooterLinks,
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
