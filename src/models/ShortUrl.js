const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShortUrlSchema = new Schema({
	url: {
		type: String,
		required: true
	},
	code: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = ShortUrl = mongoose.model('shorturls', ShortUrlSchema)