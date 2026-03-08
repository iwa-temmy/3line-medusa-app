/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { className?: string; title?: string }
  >;
  export { ReactComponent };
  export default ReactComponent;
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}
