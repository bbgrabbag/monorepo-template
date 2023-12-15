import rootConfig from '@repo/jest/jest.config';
import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    ...rootConfig,
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest', { tsconfig: './tsconfig.test.json' }
        ],
    },
}

export default config;