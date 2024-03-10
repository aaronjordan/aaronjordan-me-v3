/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    chunk: Chunk;
    image: Image;
    'text-snippet': TextSnippet;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    footerLinks: FooterLink;
    navigation: Navigation;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "chunk".
 */
export interface Chunk {
  id: string;
  title: string;
  route: string;
  hidden?: boolean | null;
  content?:
    | (
        | {
            container: 'article' | 'aside' | 'div' | 'footer' | 'header' | 'section' | 'summary';
            text?: {
              root: {
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                type: string;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            html?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'richText';
          }
        | {
            title?: string | null;
            subtitle?: string | null;
            extras?:
              | {
                  content?: string | null;
                  id?: string | null;
                }[]
              | null;
            icon?: (string | null) | Image;
            body?: (string | null) | TextSnippet;
            container: 'article' | 'section';
            id?: string | null;
            blockName?: string | null;
            blockType: 'card';
          }
        | {
            name: string;
            images?:
              | {
                  image: string | Image;
                  caption?: string | null;
                  initial?: boolean | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'carousel';
          }
        | {
            filename?: string | null;
            lang: string;
            lineNumbers?: boolean | null;
            snippet?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'code-snippet';
          }
        | {
            heading?:
              | {
                  content: string;
                  id?: string | null;
                }[]
              | null;
            subheading?:
              | {
                  content: string;
                  id?: string | null;
                }[]
              | null;
            image: string | Image;
            id?: string | null;
            blockName?: string | null;
            blockType: 'hero';
          }
      )[]
    | null;
  meta?:
    | {
        type?: string | null;
        contents?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "image".
 */
export interface Image {
  id: string;
  name?: string | null;
  alt: string;
  caption?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "text-snippet".
 */
export interface TextSnippet {
  id: string;
  text?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  html?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footerLinks".
 */
export interface FooterLink {
  id: string;
  items: {
    label: string;
    link: string;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation".
 */
export interface Navigation {
  id: string;
  items: {
    title: string;
    route: string;
    icon?: string | null;
    hidden?: boolean | null;
    id?: string | null;
  }[];
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}