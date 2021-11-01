## npm registry manager

Just npm registry manager, inspired by https://github.com/Pana/nrm ,
simple and clean code.


### Install

    npm i @twn39/nrm-next -g

then you can use the `nrm` or `nrm-next` command.

**issue**

```shell
npm ERR! code EEXIST
npm ERR! syscall symlink
npm ERR! path ../lib/node_modules/@twn39/nrm-next/dist/index.js
npm ERR! dest /Users/xxxx/.nvm/versions/node/v14.17.5/bin/nrm
npm ERR! errno -17
npm ERR! EEXIST: file already exists, symlink '../lib/node_modules/@twn39/nrm-next/dist/index.js' -> '/Users/xxxx/.nvm/versions/node/v14.17.5/bin/nrm'
npm ERR! File exists: /Users/xxxx/.nvm/versions/node/v14.17.5/bin/nrm
npm ERR! Remove the existing file and try again, or run npm
npm ERR! with --force to overwrite files recklessly.
```

if you see this error, just remove the `nrm` installed on system, and then reinstall the `nrm-next`


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
