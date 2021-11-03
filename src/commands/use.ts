import {green, log, red, blue} from "../utils";
import {getAllRegistries, setRegistry} from "../helper";

export const meta = (yargs: any) => {
    yargs.positional('name', {
        describe: 'The registry name',
        type: 'string',
    });
}

export const useCommand = async(argv: any) => {
    const allRegistries = getAllRegistries();
    const registryUrl = allRegistries[argv.name]?.registry;
    const registryHome: any = allRegistries[argv.name]?.home;
    if (!registryUrl) {
        log("\r\n");
        log(red(`  The ${argv.name} registry is not exists.`));
        log("\r\n");
        return ;
    }
    const success = await setRegistry(registryUrl, registryHome);
    if (success) {
        log("\r\n");
        log(green(`  Registry has been set to: ${blue(registryUrl)}`));
        log("\r\n");
    }
}

export default {meta, command: useCommand}
