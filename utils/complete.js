
//--- Import dependencies.
const map = require('lodash/map')
const pick = require('lodash/pick')
const openai = require('../services/openai')

module.exports = async (prompt, options = {}) => {

	//--- Parse options.
	const engineId = options.engineId
	const payload = pick(options, [
		'max_tokens',
		'temperature',
		'top_p',
		'n',
		'stream',
		'logprobs',
		'echo',
		'stop',
		'presence_penalty',
		'frequency_penalty',
		'best_of',
		'logit_bias'
	 ])

	//--- Query the GPT-3 API.
	let { choices } = await openai.complete(engineId, {prompt, ...payload})
		.catch(err => console.error(err.response.data || err.message))

	//--- Parse the output data.
	return map(choices, 'text')
}