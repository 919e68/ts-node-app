import {
  Query,
  Resolver
} from 'type-graphql'

@Resolver()
export default class EchoResolver {
  @Query(returns => String)
  async user(): Promise<string> {
    return `user query`
  }
}
