import {green, grey, log, blue} from "../utils";
import {getCurrentRegistry} from "../helper";


export const currentCommand = async() => {
    const registry = await getCurrentRegistry();
    log("\r\n");
    log(`  ${green('Current'.padEnd(20, ' '))}${blue(registry)}`);
    log("\r\n");
}
