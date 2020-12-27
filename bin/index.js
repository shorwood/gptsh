#!/usr/bin/env node

//--- Import dependencies.
const yargs = require('yargs/yargs')
const utils = require('../utils')
const data = require('../data')
const get = require('lodash/get')
const replace = require('lodash/replace')

//--- Parse argv arguments using 'yargs' package.
const argv = yargs(process.argv.slice(2))
	.usage('Usage: $0 <query> [options]')
	.usage('Example: $0 "List all files of this directory" | bash')
	.usage('Example: $0 "Install the yargs package" | bash')
	.usage('Example: $0 "Find all lines containing the word version in yarn.lock" | bash')
	.usage('Example: $0 "Delete the root directory" --engine ada')
	.options('engine', {type: 'string', alias: 'e'})
	.options('secret', {type: 'string', alias: 's'})
	.options('max-token', {type: 'number', alias: 't'})
	.help()
	.argv

//--- Build the configuration object.
const appConfig = utils.buildConfig({
	engineId: argv.engine,
	secret: argv.secret,
})

//---  Build the prompt.
const input = argv._.join(' ')
const context = data.englishToBash
const prompt = context.replace('{{input}}', input)

//--- Compute the apporpirate shell command and output it.
utils.complete(prompt, appConfig).then(output => {
	output = get(output, 0)
	output = replace(output, '$ ', '')
	console.log(output)
})