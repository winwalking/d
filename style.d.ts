// src/declarations.d.ts

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}
// declare module "*.svg" {
//   import * as React from 'react';
//   export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
//   const src: string;
//   export default src;
// }
declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.webp' {
  const content: any;
  export default content;
}
declare module "*.webm" {
  const src: string;
  export default src;
}
declare module "*.csv" {
  const content: string;
  export default content;
}

declare module "*.ttf" {
  const value: string;
  export default value;
}