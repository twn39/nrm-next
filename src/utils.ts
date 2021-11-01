import chalk from 'chalk';
const path = require('path');

export const log = console.log;
export const green = chalk.green;
export const grey = chalk.grey;
export const red = chalk.red;
export const blue = chalk.blue;

const pathEnv = (process.platform == 'win32') ? 'USERPROFILE' : 'HOME';
export const registriesPath = path.join(process.env[pathEnv], '.registries.json');
