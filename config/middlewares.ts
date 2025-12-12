export default [
	'strapi::logger',
	'strapi::errors',
	'strapi::security',
	{
		name: 'strapi::cors',
		config: {
			headers: "*",
			enabled: true,
			credentials: true,
			keepHeaderOnError: true,
			origin: [
				'http://localhost:1337', // Strapi admin
				'http://localhost:4200'  // Your Angular frontend
			],
			methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
		},
	},
	'strapi::poweredBy',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];
