import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/ast.ts', 'src/module.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    // dts: {
    //     banner: '/// <reference path="./ast-ext.d.ts" />',
    // },
    format: ['cjs', 'esm'],
});
