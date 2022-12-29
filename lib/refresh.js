const fs = require('fs');
const handlebars = require("handlebars");
const chalk = require("chalk");

module.exports = async () => {
    const list = fs.readdirSync("./src/views")
        .filter(v => v!="Home")

    function compile(meta, filePath, templatePath) {
        if(fs.existsSync(templatePath)) {
            const content = fs.readFileSync(templatePath).toString();
            const result = handlebars.compile(content)(meta);

            fs.writeFileSync(filePath, result);

            console.log(chalk.green(`🚀 ${filePath} 创建成功`))
        }
    }
}