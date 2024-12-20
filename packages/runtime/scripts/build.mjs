import { appendFile } from 'fs/promises';

await $`tsup-node`;

const enhanceExport = '\n;export * from "./enhance";\n';

await appendFile('./dist/index.d.ts', enhanceExport, 'utf8');
await appendFile('./dist/index.d.mts', enhanceExport, 'utf8');
