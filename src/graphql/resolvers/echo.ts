import {
  Arg,
  Query,
  Mutation,
  Resolver
} from 'type-graphql'

import { CreateUser } from 'interactors'

@Resolver()
export default class EchoResolver {
  @Mutation(returns => String)
  async echo(): Promise<string> {

    CreateUser.run({ id: 1})
    return `echo`
  }
}
