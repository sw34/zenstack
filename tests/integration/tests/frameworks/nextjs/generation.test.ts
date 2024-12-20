import { run } from '@zenstackhq/testtools';
import fs from 'fs';
import fse from 'fs-extra';
import { fileURLToPath } from 'node:url';
import path from 'path';

describe('SWR Hooks Generation Tests', () => {
    let origDir: string;

    beforeAll(() => {
        origDir = process.cwd();
    });

    afterEach(() => {
        process.chdir(origDir);
    });

    const _dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

    it('sqlite', async () => {
        const testDir = path.join(_dirname, './test-run/sqlite');
        if (fs.existsSync(testDir)) {
            fs.rmSync(testDir, { recursive: true, force: true });
        }
        fs.mkdirSync(testDir, { recursive: true });
        fse.copySync(path.join(_dirname, './test-project'), testDir);

        process.chdir(testDir);
        const nodePath = path.join(testDir, 'node_modules');
        run('npm install');
        run('npx zenstack generate --schema ./sqlite.zmodel', { NODE_PATH: nodePath });
        run('npm run build', { NODE_PATH: nodePath });
    });

    it('postgres', async () => {
        const testDir = path.join(_dirname, './test-run/postgres');
        if (fs.existsSync(testDir)) {
            fs.rmSync(testDir, { recursive: true, force: true });
        }
        fs.mkdirSync(testDir, { recursive: true });
        fse.copySync(path.join(_dirname, './test-project'), testDir);

        process.chdir(testDir);
        const nodePath = path.join(testDir, 'node_modules');
        run('npm install');
        run('npx zenstack generate --schema ./postgres.zmodel', { NODE_PATH: nodePath });
        run('npm run build', { NODE_PATH: nodePath });
    });
});
