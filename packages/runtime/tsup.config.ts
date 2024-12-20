import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'src/index.ts',
        'src/enhance.ts',
        'src/edge.ts',
        'src/enhancements/node/index.ts',
        'src/enhancements/edge/index.ts',
        'src/validation.ts',
        'src/zod/index.ts',
        'src/zod/input.ts',
        'src/zod/objects.ts',
        'src/zod/models.ts',
        'src/model-meta.ts',
        'src/models.ts',
        'src/zod-utils.ts',
        'src/cross/index.ts',
        'src/browser/index.ts',
    ],
    splitting: false,
    sourcemap: true,
    dts: true,
    clean: true,
    format: ['cjs', 'esm'],
    external: ['.zenstack'],
});
