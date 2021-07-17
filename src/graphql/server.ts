import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import { buildSchemaSync } from 'type-graphql'

import resolvers from './resolvers'

export default new ApolloServer({
  schema: buildSchemaSync({
    resolvers
  })
})
