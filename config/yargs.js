const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: false,
        description: 'base to multiply'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: true,
        default: false,
        description: 'List or not the multiplying result'
    })
    .option('limit', {
        alias: 'limit',
        type: 'number',
        demandOption: true,
        default: 10,
        description: 'How much it will multiply'
    })
    .argv;

module.exports = argv;