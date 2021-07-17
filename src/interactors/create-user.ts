import Interactor from 'core/lib/interactor'
import { User } from 'core/types'

export class CreateUser extends Interactor {
  static async run(user: User) {
    // console.log('interactor::createUser', user)
  }
}
