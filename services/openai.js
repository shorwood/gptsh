
//--- Import dependencies.
const axios = require('axios')

//--- Create an axios instance to query to.
const eventService = axios.create({
	baseURL: 'https://api.openai.com/v1',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer sk-XckwVRipQyM9nr1M8jVGGBUvDGIqwVmsbcrznkwz'
	}
})

//--- Export the routes.
module.exports = {
    getEngines: () => eventService.get(`/engines`).then(res => res.data),
    getEngine: engineId => eventService.get(`/engines/${engineId}`, payload).then(res => res.data),
    complete: (engineId, payload) => eventService.post(`/engines/${engineId}/completions`, payload).then(res => res.data),
}