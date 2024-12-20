import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/ast.ts', 'src/prisma.ts', 'src/dmmf-helpers/index.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['cjs', 'esm'],
});
