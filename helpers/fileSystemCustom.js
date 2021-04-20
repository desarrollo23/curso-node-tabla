const fs = require('fs');

const saveFileSync = async(base, output, list = false) => {

    try {
        let tableName = `table-${base}.txt`;
        fs.writeFileSync(`././salida/${tableName}`, output);

        if (list)
            imprimirTabla(output);

        return tableName;

    } catch (err) {
        throw err;
    }
}

const deleteFile = async(name) => {
    try {

        let exist = await validateExistsFile(name);

        if (!exist) {
            console.log('File not found');
            return;
        }

        fs.unlink(name, function(err) {
            if (err) throw err;
            console.log('File deleted!');
        });
    } catch (err) {
        throw err;
    }
}

const validateExistsFile = async(name) => {

    let exist = fs.existsSync(name);
    return exist;
}


const imprimirTabla = (output) => {
    console.log(output);
}

module.exports = {
    saveFileSync,
    deleteFile
}