import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        'cli/index': 'src/cli/index.ts',
        'plugins/prisma': 'src/plugins/prisma/index.ts',
        'plugins/enhancer': 'src/plugins/enhancer/index.ts',
        'plugins/zod': 'src/plugins/zod/index.ts',
        'language-server/zmodel-module': 'src/language-server/zmodel-module.ts',
        'utils/ast-utils': 'src/utils/ast-utils.ts',
        'cli/cli-util': 'src/cli/cli-util.ts',
        extension: 'src/extension.ts',
    },
    splitting: false,
    dts: true,
    sourcemap: true,
    clean: true,
    format: ['esm', 'cjs'],
});
