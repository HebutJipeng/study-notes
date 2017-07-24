var PORT  = 9999
var thhp = require('http')
var qs = require('qs')

var server = http.createServer(function(request, response) {
	var query = require('url').parse(request.url).query
	var params = qs.parse(query)

	response.end(query.echostr)
})

