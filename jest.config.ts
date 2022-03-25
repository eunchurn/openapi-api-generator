import { pathsToModuleNameMapper, GlobalConfigTsJest } from "ts-jest";
import ts from "typescript";

const compilerOptionsPaths = (() => {
  const configFileName = ts.findConfigFile("../", ts.sys.fileExists, "tsconfig.json");
  if (configFileName) {
    const configFile = ts.readConfigFile(configFileName, ts.sys.readFile);
    const option = ts.parseJsonConfigFileContent(configFile.config, ts.sys, "./");
    return option.raw.compilerOptions.paths;
  }
  return {}
})();

const tsJestConfig: GlobalConfigTsJest = {
  "ts-jest": {
    tsconfig: "tsconfig.json",
    compiler: "typescript",
  },
};

const jestSetting = {
  setupFiles: ["<rootDir>/.jest/setupEnv.js"],
  globals: tsJestConfig,
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptionsPaths),
  moduleDirectories: ["node_modules", "src"],
  modulePathIgnorePatterns: ["dist"],
  testRegex: "\\.spec|\\.test\\.ts$",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

export default jestSetting;
