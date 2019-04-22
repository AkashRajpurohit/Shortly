// ENV configuration
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { server: { port }} = require('./config')

// Load routes
const routes = require('./routes')

// Database connection
require('./helpers/databaseConnection');

// Initialize server
const app = express();

// Ejs views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// App middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')))

// App routes
app.get('/', (req, res) => {
	if(req.query.error) {
		res.render('index', { error: true, success: false, message: req.query.message })
	} else if (req.query.success) {
		// Change localhost to hosted url
		res.render("index", { error: false, success: true, url: `http://localhost:3000/${req.query.code}` })
	} else {
		res.render('index', { error: false, success: false })
	}
});
app.use('/', routes)

// Run server
app.listen(port, () => process.stdout.write(`\n\n\x1b[34m Server started listening @ port: ${port}\x1b[0m \n`));