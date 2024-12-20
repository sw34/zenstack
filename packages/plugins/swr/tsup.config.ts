import { defineConfig } from 'tsup';

export default defineConfig({
    entry: { index: 'src/index.ts', runtime: 'src/runtime/index.ts' },
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['esm', 'cjs'],
});
