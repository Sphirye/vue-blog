<template>
    <div>
      <v-snackbar v-model="enabled" class="mt-0" bottom vertical multi-line :timeout="snackbarModule.timeout">
        {{ snackbarModule.message }}
      </v-snackbar>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import { getModule } from "vuex-module-decorators";
import SnackbarModule from "@/store/modules/SnackbarModule";

@Component
export default class PostDialogComponent extends Vue {

  snackbarModule: SnackbarModule = getModule(SnackbarModule)

  get enabled() {
    return this.snackbarModule.enabled
  }

  set enabled(v: boolean) {
    this.snackbarModule.setSnackbarEnabled(v)
  }

}
</script>