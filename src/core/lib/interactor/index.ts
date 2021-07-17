export default class Interactor {
  public context: any = {}
  protected run: void | undefined

  constructor(context: any) {
    this.context = context
  }

  _run() {
    if (this.run) {
      /* tslint:disable:no-string-literal */
      this['run']()
    }
  }

  static async run(context: any) {
    return new this(context)._run()
  }
}
