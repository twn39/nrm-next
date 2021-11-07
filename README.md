## Npm registry manager

Just npm registry manager, inspired by https://github.com/Pana/nrm ,
simple and clean code.


### Install

    npm i nrm-next -g

then you can use the `nrm` or `nrm-next` command.

**issue**

```shell
npm ERR! code EEXIST
npm ERR! path /Users/XXX/.nvm/versions/node/v16.13.0/bin/nrm
npm ERR! EEXIST: file already exists
npm ERR! File exists: /Users/XXX/.nvm/versions/node/v16.13.0/bin/nrm
npm ERR! Remove the existing file and try again, or run npm
npm ERR! with --force to overwrite files recklessly.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/TANGW197/.npm/_logs/2021-11-07T04_29_42_563Z-debug.log
```

if you see this error, you can just overwrite the command by add the option `--force`:

```shell
npm i nrm-next -g --force
```

or remove the `nrm` package installed on system:

```shell
npm remove nrm -g
```

and then reinstall the `nrm-next`

### Example

**list all registry**

```shell
⋊> ~ nrm ls                                                                                                                                (base) 15:09:42

 * npm                      https://registry.npmjs.org/                                 https://www.npmjs.org
   yarn                     https://registry.yarnpkg.com/                               https://yarnpkg.com
   tencent                  https://mirrors.cloud.tencent.com/npm/                      https://mirrors.cloud.tencent.com/npm/
   cnpm                     https://r.cnpmjs.org/                                       https://cnpmjs.org
   taobao                   https://registry.npmmirror.com/                             https://npm.taobao.org
   npmMirror                https://skimdb.npmjs.com/registry/                          https://skimdb.npmjs.com/
```

**change the registry**

```shell
⋊> ~ nrm use yarn                                                                                                                          (base) 15:20:38

  Registry has been set to: https://registry.yarnpkg.com/
```

### Usage

```shell
⋊> ~ nrm --help                                                                                                                            (base) 15:20:45
nrm <cmd> [args]

命令：
  nrm ls                       List all the registries
  nrm current                  Show the registry URL instead of the name
  nrm use <name>               Change registry to registry
  nrm add <name> <url> [home]  Add one custom registry
  nrm rename <origin> <name>   Set custom registry name
  nrm del <name>               Delete one custom registry

选项：
  --version  显示版本号                                                   [布尔]
  --help     显示帮助信息                                                 [布尔]
```
