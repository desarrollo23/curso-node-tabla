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
    .option('lim', {
        alias: 'limit',
        type: 'number',
        demandOption: true,
        default: 10,
        description: 'How much it will multiply'
    })
    .option('opt', {
        alias: 'option',
        type: 'string',
        demandOption: true,
        description: 'Specified what operation will be executed'
    })
    .argv;

module.exports = argv;