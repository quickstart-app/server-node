import Mongoose from 'mongoose'
import cachegoose from 'cachegoose'
import Sequelize from 'sequelize'

const mongoosedb = Mongoose.connect(process.env.MONGODB_URI)

cachegoose(Mongoose, {
	engine: 'redis', /* If you don't specify the redis engine,      */
	port: process.env.REDIS_PORT, /* the query results will be cached in memory. */
	host: process.env.REDIS_HOST,
	compress: true,
	password: process.env.REDIS_PASSWORD
})

const sequelizedb = new Sequelize(process.env.SEQUELIZEDBNAME, process.env.SEQUELIZEDBUSER, process.env.SEQUELIZEDBPASSWORD, {
	host: process.env.SEQUELIZEDBHOST,
	dialect: 'mysql' | 'sqlite' | 'postgres' | 'mssql'
})

export { mongoosedb, sequelizedb }
