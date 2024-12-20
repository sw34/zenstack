import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        api: 'src/api/index.ts',
        express: 'src/express/index.ts',
        fastify: 'src/fastify/index.ts',
        hono: 'src/hono/index.ts',
        nestjs: 'src/nestjs/index.ts',
        next: 'src/next/index.ts',
        nuxt: 'src/nuxt/index.ts',
        sveltekit: 'src/sveltekit/index.ts',
        types: 'src/types.ts',
    },
    // noExternal: ['ts-japi'],
    splitting: false,
    sourcemap: true,
    dts: true,
    clean: true,
    format: ['cjs', 'esm'],
});
