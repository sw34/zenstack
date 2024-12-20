import { fileURLToPath } from 'node:url';
import path from 'path';
import { loadDocument } from '../../../src/cli/cli-util';

const _dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

describe('Mutiple files Tests', () => {
    it('model loading post', async () => {
        await loadDocument(path.join(_dirname, './schema.zmodel'));
    });

    it('model loading user', async () => {
        await loadDocument(path.join(_dirname, './user.zmodel'));
    });
});
