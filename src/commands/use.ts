import {green, log, red} from "../utils";
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
        log(red(`  The ${argv.name} registry is not exists.`));
        return ;
    }
    const success = await setRegistry(registryUrl, registryHome);
    if (success) {
        log(green(`  The ${argv.name} registry is now available.`));
    }
}

export default {meta, command: useCommand}
