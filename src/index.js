#!/usr/bin/env node

//--- Import dependencies.
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const uniq = require('lodash/uniq')
const complete = require('./complete')
const buildConfig = require('./buildConfig')
const buildPrompt = require('./buildPrompt')

//--- Get package name.
const { name: appName } = require('../package.json');

//--- Parse argv arguments using 'yargs' package.
const argv = yargs(hideBin(process.argv))
	.usage(`Usage: ${appName} <input> [options]`)
	.example(`${appName} List all files of this directory | bash`)
	.example(`${appName} Install the lodash package --secret <YOUR_SECRET_KEY> | bash`)
	.example(`${appName} Delete the root directory --engine ada`)
	.example(`${appName} Add remote from github with name shorwood/gptsh --max-tokens 32`)
	.option('secret', {type: 'string', alias: 's', description: 'OpenAI API key for authentication'})
	.option('engine', {type: 'string', alias: 'e', description: 'ID of the engine to use'})
	.option('tokens', {type: 'number', alias: 't', description: 'Maximum number of tokens to consume', default: 100})
	.option('temperature', {type: 'number',description: 'Higher values means the model will take more risks', default: 0.0})
	.option('platform', {type: 'string', alias: 'p', description: 'Platform of the command to output'})
	.option('n', {type: 'number', description: 'Number of completions to generate'})
	.demandCommand()
	.help()
	.argv

//--- Build the configuration object.
const appConfig = buildConfig({
	engineId: argv.engine,
	secret: argv.secret,
	max_tokens: argv.tokens,
	temperature: argv.temperature,
	n: argv.n,
	platform: argv.platform
})

//--- Build the prompt string.
const prompt = buildPrompt(argv._.join(' '), appConfig)

//--- Compute the apporpirate shell command and output it.
complete(prompt, appConfig).then(outputs => {
	for(output of uniq(outputs))
		console.log(output.replace('$ ', ''))
})