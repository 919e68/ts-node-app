import 'dotenv/config'
import express from 'express'

import { app as appConfig } from 'config'
import graphql from 'graphql/server'
import { logger } from 'core/lib/utils'

const app = express()
graphql.applyMiddleware({ app })

app.listen(appConfig.port, () => {
  logger.info(`🚀🚀 server is up at ==> ${appConfig.url}:${appConfig.port}`)
})
