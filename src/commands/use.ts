import {green, log, red, blue} from "../utils";
import {setRegistry} from "../helper";
import registries from "../registries";

export const meta = (yargs: any) => {
    yargs.positional('name', {
        describe: 'The registry name',
        type: 'string',
    });
}

export const useCommand = async(argv: any) => {
    const registryUrl = registries[argv.name]?.registry;
    const registryHome: any = registries[argv.name]?.home;
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
