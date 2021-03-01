<template>
  <v-app>
    <AppBarComponent/>
    
    <v-main>
      <router-view/>
    </v-main>
    <SnackbarComponent/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import AppBarComponent from "@/components/AppBarComponent.vue";
import SnackbarComponent from "@/components/SnackbarComponent.vue";

@Component({components: {AppBarComponent, SnackbarComponent}})
export default class App extends Vue {

}
</script>
