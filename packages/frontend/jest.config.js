module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  testURL: 'http://localhost/',
  roots: ['<rootDir>/src', '<rootDir>/test/'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  snapshotSerializers: [
    '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */,
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  globals: {
    '@swc/jest': {
      tsconfig: '<rootDir>/test/tsconfig.jest.json',
    },
  },
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        module: {
          type: 'commonjs',
        },
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
};
