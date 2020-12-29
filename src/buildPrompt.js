
//--- Import dependencies.
const fs = require('fs')
const _ = require('lodash')

//--- Require file as string function.
const requireText = filename => fs.readFileSync(require.resolve(filename)).toString()
const promptTemplate = requireText('../data/promptTemplate.txt')

module.exports = (input, options = {}) => {

    switch(options.platform){
        case 'aix': input += ' on IBM AIX'; break;
        case 'linux': input += ' on Linux'; break;
        case 'darwin': input += ' on Apple OSX'; break;
        case 'win32': input += ' with PowerShell'; break;
        case 'freebsd': input += ' on FreeBSD'; break;
        case 'openbsd': input += ' on OpenBSD'; break;
        case 'sunos': input += ' on Sunos'; break;
        case 'cmd': input += ' with Windows Command Prompt'; break;
    }

    //--- Insert the input in the template
    prompt = _.replace(promptTemplate, '{{input}}', input)

    //--- Return the generated prompt.
    return prompt
}