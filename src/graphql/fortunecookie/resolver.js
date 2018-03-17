import { FortuneCookie } from '@/data/fortunecookie'

exports.resolver = {
	Query: {
		GetFortuneCookie (root, args, context) {
			return {message: FortuneCookie.getOne()}
		}
	}
}
