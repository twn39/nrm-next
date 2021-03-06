import {green, log, blue} from "../utils";
import {getCurrentRegistry} from "../helper";


export const currentCommand = async() => {
    const registry = await getCurrentRegistry();
    log("\r\n");
    log(`  ${green('current'.padEnd(20, ' '))}${blue(registry)}`);
    log("\r\n");
}
