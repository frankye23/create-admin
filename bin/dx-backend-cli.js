#!/usr/bin/env node
   
// 定制命令行界面
const program = require("commander")
program.version(require('../package.json').version)

// act int dx-backend-cli 创建 dx-backend-cli 工厂
program.command('init <name>')
    .description("init project")
    .action(require('../lib/init.js'))

// argv 执行中所有参数
program.parse(process.argv)