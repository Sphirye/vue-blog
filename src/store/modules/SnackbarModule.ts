import store from "@/store/store"
import { Module, Mutation, VuexModule } from "vuex-module-decorators"

@Module({ dynamic: true, store, name: "SnackbarModule" })
export default class SnackbarModule extends VuexModule {
    message: string = "Hello Snackbar"
    timeout: number = 2500
    enabled: boolean = false

    messages: string[] = []

    @Mutation
    setSnackbarEnabled(v: boolean) {
        this.enabled = v
    }

    @Mutation
    makeToast(message: string) {
        if (this.enabled) {
            this.messages.unshift(message);
        } else {
            this.message = message
            this.enabled = true
        }
    }
}