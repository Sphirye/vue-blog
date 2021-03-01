<template>
    <div>
        <v-app-bar flat class="indigo darken-3">
            <v-app-bar-nav-icon>
                <v-icon class="white--text">mdi-home</v-icon>
            </v-app-bar-nav-icon>

            <v-app-bar-nav-icon>
                <v-icon class="white--text">mdi-search-web</v-icon>
            </v-app-bar-nav-icon>
            
            <v-app-bar-title>
                <div class="ml-3 white--text">Blog Testing</div>
            </v-app-bar-title>
        </v-app-bar>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component({components: {}})
export default class AppBarComponent extends Vue {}
</script>