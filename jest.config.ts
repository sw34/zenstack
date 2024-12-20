import path from 'node:path';
import { createDefaultEsmPreset, type JestConfigWithTsJest } from 'ts-jest';

const presetConfig = createDefaultEsmPreset({
    isolatedModules: true,
});

const jestConfig: JestConfigWithTsJest = {
    ...presetConfig,
    testTimeout: 300000,
    globalSetup: path.join(__dirname, './script/test-global-setup.ts'),
    setupFiles: [path.join(__dirname, './script/set-test-env.ts')],
};

export default jestConfig;
