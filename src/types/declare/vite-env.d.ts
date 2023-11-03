/// <reference types="vite/client" />

// https://cn.vitejs.dev/guide/env-and-mode.html#intellisense
interface ImportMetaEnv {
  readonly VITE_HTTP_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
