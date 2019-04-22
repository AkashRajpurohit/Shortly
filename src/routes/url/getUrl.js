const express = require('express')
const router = express.Router()

const ShortUrl = require('../../models/ShortUrl')

router.get('/:code', async (req, res) => {
	const { code } = req.params
	try {
		const shortUrl = await ShortUrl.findOne({ code })

		if(!shortUrl) {
			return res.render("404", { code })
		} else {
			res.redirect(shortUrl.url)
		}

	} catch(e) {
		console.error(e)
		res.redirect('/?error=true&message=Internal Server Error. Please try again later')
	}
})

module.exports = router;