import store from "@/store/store"
import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators"

@Module({dynamic: true, store, name: "DialogModule"})
export default class DialogModule extends VuexModule {
    
    enabled: boolean = false

    @Mutation
    setDIalogEnables(enabled: boolean) {
        this.enabled = enabled
    }
}