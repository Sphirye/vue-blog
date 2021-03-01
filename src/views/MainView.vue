<template>
  <v-layout>
    <v-flex md6>
      <v-progress-linear :indeterminate="true" color="purple" :active="loading"/>

      <!--update es solo un nombre para el activador que se encarga de refrescar-->
      <div class="d-flex align-center justify-center ma-5">
        <v-btn @click="switchDialog">
          Nuevo Post
        </v-btn>
      </div>
      <PostsComponent :update="refresh" :posts="this.posts" />
    </v-flex>

    <v-flex md6>
      <PostDialogComponent :update="refresh" :switchDialog="switchDialog" :dialog="dialog"/>
    </v-flex>
	</v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import PostDialogComponent from "@/components/PostDialogComponent.vue"
import PostsComponent from "@/components/PostComponent.vue"
import PostService from "@/services/PostServices"
import Post from "@/models/Post"

@Component({
  components: { PostDialogComponent, PostsComponent },
})

export default class MainView extends Vue {
  loading: boolean = false
  dialog: boolean = false
  posts: Post[] = []

  async created() {
    this.refresh()
  }

  refresh() {
    PostService.getPosts(this, this.posts)
  }

  switchDialog() {
    this.dialog = !this.dialog
  }
}
</script>
