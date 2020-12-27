
//--- Import dependencies.
const fs = require('fs')

//--- Get text
const requireText = filename => fs.readFileSync(require.resolve(filename)).toString();

module.exports = {
    englishToBash: requireText('./englishToBash.txt')
}