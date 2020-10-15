// JEST configuration file, see link for more information


const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  // testMatch: ['**/+(*.)+(spec).+(ts)'],
  testMatch: ['**/user.component.(spec).+(ts)'],
  // setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/test.jest.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/my-app',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  })
};
