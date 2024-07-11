// test/processData.js
const { getData, getRaw } = require('./utils');

function processData() {
    const data = getData();
    return `Processed:${data}`; // No space after the colon
}

function processRaw() {
    const raw = getRaw();
    return raw.toString(); // Convert boolean to string
}

module.exports = { processData, processRaw };
