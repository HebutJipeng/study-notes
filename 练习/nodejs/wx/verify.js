// verify.js

var PORT = 9999
var http = require('http')
var qs = require('qs')

var TOKEN = 'yuntu'

function checkSignature(params, token) {
	var key = [token, params.timestamp, params.nonce].sort().join('')
	var sha1 = require('crypto').createHash('sha1')
	sha1.update(key)

	return sha1.digest('hex') == params.signature
}

var server = http.createServer(function(request, response) {
	var query = require('url').parse(request.url).query;
	var params = qs.parse(query)

	console.log(params)
	console.log('token-->', TOKEN)

	if (checkSignature(params, TOKEN)) {
		response.end(params.echostr)
	} else {
		response.end('signature fail')
	}
})

server.listen(PORT)

console.log('server running on ' + PORT)