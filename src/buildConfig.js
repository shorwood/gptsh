
//--- Import dependencies.
const rc = require('rc')
const dotenv = require('dotenv').config()
const defaults = require('lodash/defaults')
const { name: appName } = require('../package.json');

//--- Build the default options.
const defaultOptions = {
    secret: null,
    engineId: 'davinci',
    max_tokens: 32,
    temperature: 0.1,
    top_p: undefined,
    n: undefined,
    stream: undefined,
    logprobs: undefined,
    echo: false,
    stop: '\n',
    presence_penalty: undefined,
    frequency_penalty: undefined,
    best_of: undefined,
    logit_bias: undefined,
}

//--- Get options from environment variables.
const environmentOptions = {
    secret: process.env.OPENAI_SECRET_KEY,
    engineId: process.env.OPENAI_ENGINE_ID,
}

//--- Get options from .gpt3shrc
const configOptions = rc(appName, {})

//--- Export the compiled options.
module.exports = (localOptions = {}) => defaults(
    localOptions,
    configOptions,
    environmentOptions,
    defaultOptions,
)