import { Module, VuexModule } from 'vuex-module-decorators'
import { Book } from "@/models"

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {

  books = [{}] as Book[];

  // private count = 0 //

  // public get $count() {
  //   return this.count
  // }

  // @Mutation
  // private INCREMENT(number: number) {
  //   this.count += number
  // }

  // @Action({commit: "INCREMENT"})
  // public increment(count: number) {
  //   return count
  // }

}
