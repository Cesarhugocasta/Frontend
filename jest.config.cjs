module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/_mocks_/styleMock.js',
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/_mocks_/fileMock.js',
    },
    
      
  };