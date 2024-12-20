import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        'runtime/index': 'src/runtime/index.ts',
        'runtime/react': 'src/runtime/react.ts',
        'runtime/vue': 'src/runtime/vue.ts',
        'runtime/svelte': 'src/runtime/svelte.ts',
        'runtime-v5/index': 'src/runtime-v5/index.ts',
        'runtime-v5/react': 'src/runtime-v5/react.ts',
        'runtime-v5/vue': 'src/runtime-v5/vue.ts',
        'runtime-v5/svelte': 'src/runtime-v5/svelte.ts',
    },
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['cjs', 'esm'],
});
