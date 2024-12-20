/// <reference types="@types/jest" />

import { loadSchema } from '@zenstackhq/testtools';
import tmp from 'tmp';

tmp.setGracefulCleanup();

describe('Tanstack Query Plugin Portable Tests', () => {
    it('supports portable for standard prisma client', async () => {
        await loadSchema(
            `
        plugin tanstack {
            provider = '@zenstackhq/tanstack-query'
            output = '$projectRoot/hooks'
            target = 'react'
            portable = true
        }

        model User {
            id Int @id @default(autoincrement())
            email String
            posts Post[]
        }

        model Post {
            id Int @id @default(autoincrement())
            title String
            author User @relation(fields: [authorId], references: [id])
            authorId Int
        }
        `,
            {
                provider: 'postgresql',
                pushDb: false,
                extraDependencies: ['react@18.2.0', '@types/react@18.2.0', '@tanstack/react-query@5.56.x'],
                compile: true,
                extraSourceFiles: [
                    {
                        name: 'main.ts',
                        content: `
import { useFindUniqueUser } from './hooks';
const { data } = useFindUniqueUser({ where: { id: 1 }, include: { posts: true } });
console.log(data?.email);
console.log(data?.posts[0].title);
`,
                    },
                ],
            }
        );
    });

    it('supports portable for custom prisma client output', async () => {
        const t = tmp.dirSync({ unsafeCleanup: true });
        const projectDir = t.name;

        await loadSchema(
            `
        datasource db {
            provider = 'postgresql'
            url = env('DATABASE_URL')
        }

        generator client {
            provider = 'prisma-client-js'
            output = '$projectRoot/myprisma'
        }

        plugin tanstack {
            provider = '@zenstackhq/tanstack-query'
            output = '$projectRoot/hooks'
            target = 'react'
            portable = true
        }

        model User {
            id Int @id @default(autoincrement())
            email String
            posts Post[]
        }

        model Post {
            id Int @id @default(autoincrement())
            title String
            author User @relation(fields: [authorId], references: [id])
            authorId Int
        }
        `,
            {
                provider: 'postgresql',
                pushDb: false,
                extraDependencies: ['react@18.2.0', '@types/react@18.2.0', '@tanstack/react-query@5.56.x'],
                compile: true,
                addPrelude: false,
                projectDir,
                prismaLoadPath: `${projectDir}/myprisma`,
                extraSourceFiles: [
                    {
                        name: 'main.ts',
                        content: `
import { useFindUniqueUser } from './hooks';
const { data } = useFindUniqueUser({ where: { id: 1 }, include: { posts: true } });
console.log(data?.email);
console.log(data?.posts[0].title);
`,
                    },
                ],
            }
        );
    });

    it('supports portable for logical client', async () => {
        await loadSchema(
            `
        plugin tanstack {
            provider = '@zenstackhq/tanstack-query'
            output = '$projectRoot/hooks'
            target = 'react'
            portable = true
        }

        model Base {
            id Int @id @default(autoincrement())
            createdAt DateTime @default(now())
            type String
            @@delegate(type)
        }

        model User extends Base {
            email String
        }
        `,
            {
                provider: 'postgresql',
                pushDb: false,
                extraDependencies: ['react@18.2.0', '@types/react@18.2.0', '@tanstack/react-query@5.56.x'],
                compile: true,
                extraSourceFiles: [
                    {
                        name: 'main.ts',
                        content: `
import { useFindUniqueUser } from './hooks';
const { data } = useFindUniqueUser({ where: { id: 1 } });
console.log(data?.email);
console.log(data?.createdAt);
`,
                    },
                ],
            }
        );
    });
});
