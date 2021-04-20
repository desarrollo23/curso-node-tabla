const math = require('./helpers/math');
const fs = require('./helpers/fileSystemCustom');
const argv = require('./config/yargs');
const colors = require('colors');

const createFile = () => {

    const { base, list, limit } = argv;

    if (base == undefined || isNaN(base)) {
        console.log('(--base) property not specified or property not valid');
        return;
    }

    const output = math.multiply(base, limit);

    fs.saveFileSync(base, output, list)
        .then((table) => console.log(`The file ${table} has been saved!`.green))
        .catch(err => console.log(err));
}

const deleteFile = () => {

    const fileName = argv.fileName;

    if (fileName == undefined) {
        console.log('(--fileName) property not specified or property not valid');
        return;
    }

    fs.deleteFile(fileName);
}

try {

    // console.log(argv);
    // console.log(argv.base);
    const { opt } = argv;

    if (opt == undefined) {
        console.log('--option property is missing');
        return;
    }

    switch (opt.toLowerCase()) {
        case 'create':
            createFile();
            break;
        case 'delete':
            deleteFile();
            break;
        default:
            console.log('Option not valid');
            break;
    }
} catch (err) {
    console.error('An error has ocurred!');
    throw err;
}