const merge = require('merge');
const tsPreset = require('ts-jest/jest-preset');
const reactNativeWebPreset = require('react-native-web/jest-preset');

module.exports = merge.recursive(tsPreset, reactNativeWebPreset);
