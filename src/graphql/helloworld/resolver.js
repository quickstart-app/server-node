exports.resolver = {
	Query: {
		Hello (root, args, context) {
			return {message: "Hello " + args.name}
		}
	}
}
