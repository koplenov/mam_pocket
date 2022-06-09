
namespace $.$$ {
	const server = new $pocket_server()
	const port = 2281

	server.get('/', (req, res) => {
		res.end('/ page')
	})
	
	server.get('/test', (req, res) => {
		res.end('/test page')
	})

	server.listen(port)
	console.log(`listening on: ${port} port`)
}
