import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import schema from './schema'
import context from 'context-middleware'
import middlewares from '@/middlewares'
import throng from 'throng'

var WORKERS = process.env.WEB_CONCURRENCY || 1

function startApp () {
	const app = express()

	app.use(context())

	// .use all middlewares from the folder
	Object.keys(middlewares).map(e => app.use(middlewares[e]))

	app.use('/graphql',
		bodyParser.json(), cors(), graphqlExpress((req) => ({
			schema,
			context: req.context
		}))
	)

	// used for development (better use graphiqlapp on /graphql)
	app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))

	app.listen(process.env.PORT, () => console.log('Listening at port', process.env.PORT))
}

if (process.env.NODE_ENV === 'production') {
	throng(WORKERS, startApp)
} else {
	startApp()
}
