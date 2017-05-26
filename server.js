var express = require('express');

// een nieuwe app maken
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
	if (req.headers['x-forward-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.use(express.static('public'));

app.listen(PORT, function () {
	console.log('Express server draaid op port ' + PORT);
});