const express = require('express')
const router = express.Router()

const ShortUrl = require('../../models/ShortUrl')

router.post('/magic', async (req, res) => {
	const { url, code } = req.body
	console.log(req.body)
	try {
		const codeExists = await ShortUrl.findOne({ code })

		if(codeExists) {
			return res.redirect('/?error=true&message=This code is already taken. Try something else')
		}

		const newShortUrl = new ShortUrl({
			url,
			code
		})

		await newShortUrl.save()

		res.redirect('/?success=true&code=' + code)

	} catch(e) {
		console.error(e)
		res.redirect('/?error=true&message=Internal Server Error. Please try again later')
	}
})

module.exports = router;