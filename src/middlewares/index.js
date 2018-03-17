'use strict'

import fs from 'fs'
import path from 'path'

const basename = path.basename(__filename)

fs.readdirSync(__dirname).filter(file => {
	return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
}).forEach(file => {
	const moduleName = file.split('.')[0]
	exports[moduleName] = require('./' + moduleName)
})
