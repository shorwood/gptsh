
//--- Import dependencies.
const fs = require('fs')
const _ = require('lodash')

//--- Require file as string function.
const requireText = filename => fs.readFileSync(require.resolve(filename)).toString()
const promptTemplate = requireText('../data/promptTemplate.txt')

module.exports = (input, options = {}) => {

    switch(options.platform){
        case 'aix': input += ' in IBM AIX'; break;
        case 'darwin': input += ' in Apple OSX'; break;
        case 'win32': input += ' with PowerShell'; break;
        case 'freebsd': input += ' with FreeBSD'; break;
        case 'openbsd': input += ' with OpenBSD'; break;
        case 'sunos': input += ' with Sunos'; break;
        case 'cmd': input += ' with Windows CMD'; break;
    }

    //--- Insert the input in the template
    prompt = _.replace(promptTemplate, '{{input}}', input)

    //--- Return the generated prompt.
    return prompt
}