import {log} from "../utils";

export const meta = (yargs: any) => {
    yargs.positional('name', {
        describe: 'The registry name',
        type: 'string',
    });
}

export const delCommand = (argv: any) => {
    log(argv.name);
}

export default {meta, command: delCommand}
