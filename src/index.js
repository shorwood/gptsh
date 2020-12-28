#!/usr/bin/env node

//--- Import dependencies.
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const uniq = require('lodash/uniq')
const data = require('../data')
const complete = require('./complete')
const buildConfig = require('./buildConfig')

//--- Parse argv arguments using 'yargs' package.
const argv = yargs(hideBin(process.argv))
	.usage('Usage: $0 <query> [options]')
	.example('$0 List all files of this directory | bash')
	.example('$0 Install the lodash package --secret <YOUR_SECRET_KEY> | bash')
	.example('$0 Delete the root directory --engine ada')
	.example('$0 Merge the staing branch into master --max-tokens 32')
	.option('engine', {type: 'string', alias: 'e', description: 'The ID of the engine to use'})
	.option('secret', {type: 'string', alias: 's', description: 'The OpenAI API key for authentication'})
	.option('max-tokens', {type: 'number', alias: 't', description: 'The maximum number of tokens to generate'})
	.option('n', {type: 'number', description: 'How many completions to generate for each prompt'})
	.demandCommand(1)
	.help()
	.argv

//--- Build the configuration object.
const appConfig = buildConfig({
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
complete(prompt, appConfig).then(outputs => {
	for(output of uniq(outputs))
		console.log(output.replace('$ ', ''))
})