import {green, log} from "../utils";
import {getAllRegistries, saveAllRegistries} from "../helper";

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
    let allRegistries = getAllRegistries();
    const origin = allRegistries[argv.origin];
    allRegistries = {
        ...allRegistries,
        [argv.name]: origin,
    }

    saveAllRegistries(allRegistries);
    log("\r\n");
    log(`  ${green('Registry rename success')}`);
    log("\r\n");
}

export default {meta, command: renameCommand}
