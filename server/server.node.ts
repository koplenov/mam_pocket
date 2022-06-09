namespace $ {
	let configuredRoutes: { [ x: string ]: boolean } = {};
	export class $pocket_server extends $mol_object2 {
		constructor() {
			super();
			this.server()
			this.configureRoutes()
		}

		get( url: string, func: ( req: any, res: any ) => void ) {
			configuredRoutes[url] = true
			this.server().on('request', (request: any, res: any) => {
				if(url === request.url  && request.method === 'GET'){
					func(request, res)
				}
			});
		}
		
		@ $mol_mem
		server(){
			const http = require('http');
			return http.createServer();
		}

		/**
		 * Starts the HTTP server listening for connections. 
		 * @param port 
		 */
		listen( port: number ){
			this.server().listen(port)
		}
		
		configureRoutes(){
			this.server().on('request', (request: any, res: any) => {
				if(!configuredRoutes[request.url]){
					res.statusCode = 404;
					res.end()
				}
			});
		}
	}
}
