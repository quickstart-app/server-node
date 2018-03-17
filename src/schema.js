import { makeExecutableSchema } from 'graphql-tools'

import glue from 'schemaglue'

const { schema, resolver } = glue('./src/graphql')

export default makeExecutableSchema({
	typeDefs: schema,
	resolvers: resolver
})
