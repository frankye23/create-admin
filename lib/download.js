const { promisify } = require("util");

module.exports.clone = async function(repo, desc) {
    const download = promisify(require("download-git-repo"));
    const ora = require("ora"); // loading
    const process = ora('loading... dx-backend-cli');
    process.start()

    await download(repo, desc);
    process.succeed()
}