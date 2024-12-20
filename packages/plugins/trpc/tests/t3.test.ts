import { run } from '@zenstackhq/testtools';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'path';

const _dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
const ver = JSON.parse(fs.readFileSync(path.join(_dirname, '../package.json'), 'utf-8')).version;

describe('tRPC plugin tests with create-t3-app', () => {
    let origDir: string | undefined;

    beforeEach(() => {
        origDir = process.cwd();
    });

    afterEach(() => {
        if (origDir) {
            process.chdir(origDir);
        }
    });

    it('project test trpc v10', () => {
        process.chdir(path.join(_dirname, './projects/t3-trpc-v10'));

        const deps = ['zenstackhq-language', 'zenstackhq-runtime', 'zenstackhq-sdk', 'zenstack'];
        for (const dep of deps) {
            run(`npm install ${path.join(_dirname, '../../../../.build/') + dep + '-' + ver + '.tgz'}`);
        }

        run('npx zenstack generate');
        run('npm run build');
    });

    it('project test trpc v11', () => {
        process.chdir(path.join(_dirname, './projects/t3-trpc-v11'));

        const deps = ['zenstackhq-language', 'zenstackhq-runtime', 'zenstackhq-sdk', 'zenstack'];
        for (const dep of deps) {
            run(`npm install ${path.join(_dirname, '../../../../.build/') + dep + '-' + ver + '.tgz'}`);
        }

        run('npx zenstack generate');
        run('npm run build');
    });
});
