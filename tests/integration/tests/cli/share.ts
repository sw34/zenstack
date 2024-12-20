import { getWorkspaceNpmCacheFolder } from '@zenstackhq/testtools';
import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function createNpmrc() {
    const _dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
    fs.writeFileSync('.npmrc', `cache=${getWorkspaceNpmCacheFolder(_dirname)}`);
}
