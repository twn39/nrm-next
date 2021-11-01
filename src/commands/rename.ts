import {log} from "../utils";

export const meta = (yargs: any) => {
    yargs.positional('origin', {
        describe: 'The origin name',
        type: 'string',
    }).positional('name', {
        describe: 'The new name',
        type: 'string',
    })
}

export const renameCommand = (argv: any) => {
    log(argv.name);
}

export default {meta, command: renameCommand}
