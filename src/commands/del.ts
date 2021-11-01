import {green, log} from "../utils";
import {getAllRegistries, saveAllRegistries} from "../helper";

export const meta = (yargs: any) => {
    yargs.positional('name', {
        describe: 'The registry name',
        type: 'string',
    });
}

export const delCommand = (argv: any) => {
    let allRegistries = getAllRegistries();
    delete allRegistries[argv.name];

    saveAllRegistries(allRegistries);
    log("\r\n");
    log(`  ${green('Registry delete success')}`);
    log("\r\n");
}

export default {meta, command: delCommand}
