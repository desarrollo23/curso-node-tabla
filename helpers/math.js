const { saveFile } = require("./fileSystemCustom");

let output = '';

const multiply = (base, limit) => {
    for (let index = 1; index <= limit; index++) {
        output += `${base} X ${index} = ${base * index}\n`;
    }

    return output;
}

module.exports = {
    multiply
}