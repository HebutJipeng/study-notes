const dns = require('dns')

dns.lookup('iana.org', (err, add, family) => {
	console.log('IP: %j 地质组: ipv%s', add, family)
});