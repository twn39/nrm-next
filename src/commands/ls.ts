import {green, log, blue} from "../utils";
import {getAllRegistries, getCurrentRegistry} from "../helper";


export const lsCommand = async() => {
    const allRegistries = getAllRegistries();
    const keys = Object.keys(allRegistries);
    const currentRegistry = await getCurrentRegistry();
    log("\r\n");
    for(let it of keys) {
        const registry = allRegistries[it]['registry'];
        const home = allRegistries[it]['home'];
        if (registry === currentRegistry) {
            log(` * ${green(it.padEnd(25, ' '))}${blue(registry.padEnd(60, ' '))}${blue(home)}`);
        } else {
            log(`   ${green(it.padEnd(25, ' '))}${blue(registry.padEnd(60, ' '))}${blue(home)}`);
        }
    }
    log("\r\n");
}
