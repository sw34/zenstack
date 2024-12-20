import { createDefaultEsmPreset, type JestConfigWithTsJest } from 'ts-jest';

const presetConfig = createDefaultEsmPreset({
    isolatedModules: true,
});

const jestConfig: JestConfigWithTsJest = {
    ...presetConfig,
    setupFilesAfterEnv: ['./test-setup.ts'],
    testTimeout: 300000,
    // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'd.ts'],
};

export default jestConfig;
