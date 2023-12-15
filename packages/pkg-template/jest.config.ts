import rootConfig from '@repo/jest/jest.config';
import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    ...rootConfig,
}

export default config;