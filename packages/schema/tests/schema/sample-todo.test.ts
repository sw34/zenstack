import * as fs from 'fs';
import { fileURLToPath } from 'node:url';
import path from 'path';
import { loadModel } from '../utils';

const _dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

describe('Sample Todo Schema Tests', () => {
    it('model loading', async () => {
        const content = fs.readFileSync(path.join(_dirname, './todo.zmodel'), {
            encoding: 'utf-8',
        });
        await loadModel(content);
    });
});
