#!/usr/bin/env node

import {lsCommand} from "./commands/ls";
import {currentCommand} from "./commands/current";
import Use from './commands/use';
import Add from './commands/add';
import Rename from './commands/rename';
import Del from './commands/del';

const yargs = require('yargs');

yargs.scriptName("nrm")
    .usage('$0 <cmd> [args]')
    .command('ls', 'List all the registries', () => {}, lsCommand)
    .command('current', 'Show the registry URL instead of the name', () => {}, currentCommand)
    .command('use <name>', 'Change registry to registry', Use.meta, Use.command)
    .command('add <name> <url> [home]', 'Add one custom registry', Add.meta, Add.command)
    .command('rename <origin> <name>', 'Set custom registry name', Rename.meta, Rename.command)
    .command('del <name>', 'Delete one custom registry', Del.meta, Del.command)
    .help()
    .argv
