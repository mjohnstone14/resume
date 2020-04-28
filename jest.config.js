const defaults = require('jest-config');
module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'css', 'scss', 'ts', 'tsx']
};