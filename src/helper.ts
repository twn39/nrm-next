import fs from "fs";
import {registriesPath} from "./utils";
import registries from "./registries";

const npm = require('npm');

export function getCurrentRegistry() {
    return new Promise((resolve, reject) => {
        npm.load(function (err: any) {
            if (err) return reject(err);
            const currentRegistry = npm.config.get('registry');
            resolve(currentRegistry);
        });
    });
}

export function setRegistry(url: string, home = null) {
    return new Promise((resolve, reject) => {
        npm.load(function (err: any) {
            if (err) return reject(err);
            npm.commands.config(['set', 'registry', url], (err: any) => {
                if (err) return reject(err);
                if (home) {
                    npm.commands.config(['set', 'home', home], (err: any) => {
                        if (err) return reject(err);
                        resolve(true);
                    })
                } else {
                    resolve(true);
                }
            });
        });
    });
}

export function getAllRegistries() {
    if(!fs.existsSync(registriesPath)) {
        fs.writeFileSync(registriesPath, JSON.stringify(registries, null, 2));
    }

    const data = fs.readFileSync(registriesPath, 'utf-8');
    return JSON.parse(data);
}

export function saveAllRegistries(data: any) {
    fs.writeFileSync(registriesPath, JSON.stringify(data, null, 2));
}
