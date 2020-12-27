#!/usr/bin/env node

//--- Import dependencies.
const yargs = require('yargs/yargs')
const utils = require('../utils')
const data = require('../data')
const uniq = require('lodash/uniq')

//--- Parse argv arguments using 'yargs' package.
const argv = yargs(process.argv.slice(2))
	.usage('Usage: $0 <query> [options]')
	.usage('Example: $0 "List all files of this directory" | bash')
	.usage('Example: $0 "Install the lodash package" --secret <YOUR_SECRET_KEY> | bash')
	.usage('Example: $0 "Delete the root directory" --engine ada')
	.usage('Example: $0 "Merge the staing branch into master" --max-tokens 32')
	.option('engine', {type: 'string', alias: 'e', description: 'The ID of the engine to use for this request'})
	.option('secret', {type: 'string', alias: 's', description: 'The OpenAI API API keys for authentication'})
	.option('max-tokens', {type: 'number', alias: 't', description: 'The maximum number of tokens to generate'})
	.option('n', {type: 'number', description: 'How many completions to generate for each prompt.'})
	.help()
	.argv

//--- Build the configuration object.
const appConfig = utils.buildConfig({
	engineId: argv.engine,
	secret: argv.secret,
	max_tokens: argv.maxTokens,
	n: argv.n,
})

//---  Build the prompt.
const input = argv._.join(' ')
const context = data.englishToBash
const prompt = context.replace('{{input}}', input)

//--- Compute the apporpirate shell command and output it.
utils.complete(prompt, appConfig).then(outputs => {
	for(output of uniq(outputs))
		console.log(output.replace('$ ', ''))
})