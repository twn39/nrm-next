import {green, log} from "../utils";
import {getAllRegistries, saveAllRegistries} from "../helper";

export const meta = (yargs: any) => {
    yargs.positional('name', {
        describe: 'The registry name',
        type: 'string',
    }).positional('url', {
        describe: 'The registry URL',
        type: 'string',
    }).positional('home', {
        describe: 'The registry home URL',
        type: 'string',
        default: '',
    })
}

export const addCommand = (argv: any) => {
    let allRegistries = getAllRegistries();
    allRegistries = {
        ...allRegistries,
        [argv.name]: {
            home: argv.home,
            registry: argv.url,
        },
    };

    saveAllRegistries(allRegistries);
    log("\r\n");
    log(`  ${green('Registry added success')}`);
    log("\r\n");
}

export default {meta, command: addCommand}
