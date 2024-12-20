import { loadSchemaFromFile } from '@zenstackhq/testtools';
import { fileURLToPath } from 'node:url';
import path from 'path';

describe('Cal.com Sample Integration Tests', () => {
    const _dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

    it('model loading', async () => {
        await loadSchemaFromFile(path.join(_dirname, '../../schema/cal-com.zmodel'), {
            addPrelude: false,
            pushDb: false,
        });
    });
});
