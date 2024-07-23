require('dotenv').config({path: './.env.testing'})

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "mjs"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,ts,jsx,tsx}",
    "!<rootDir>/**/*Type.{js,ts,jsx,tsx}",
    "!<rootDir>/**/*.styled.{js,ts,jsx,tsx}",
    "!<rootDir>/**/icons/**",
    "!<rootDir>/**/App.tsx",
    "!<rootDir>/**/main.tsx",
    "!<rootDir>/**/vite-env.d.ts",
    "!<rootDir>/**/index.ts",
    "!<rootDir>/**/*.enum.{js,ts,jsx,tsx}",
  ],
  // silent: true
};
