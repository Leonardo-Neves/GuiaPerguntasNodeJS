const express = require("express");
const app = express();


app.set('view engine', 'ejs'); // Semelhante ao Razor

app.get('/', function(req, res) {
	res.render("index");
});

app.listen(80, function() {
	console.log("Servidor Iniciado!");
});
