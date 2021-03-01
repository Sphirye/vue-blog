<template>
	<v-container>
		<v-card v-for="(post, key) in posts" :key="key" outlined flat>
			<v-card-title class="blue-grey darken-2">
				<span class="white--text text-h5 text-center">{{post.title}}</span>

				<v-spacer/>

				<v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon>
              <v-icon class="white--text" v-bind="attrs" v-on="on">mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-btn depressed @click="switchEditPostDialog(post)">
                Editar
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn block depressed @click="deletePost(post.id)">
                Eliminar
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
			
			</v-card-title>

			<v-card-text class="mt-3">
				<p class="text-body text-center">{{post.description}}</p>
				<span>{{post.content}}</span>
			</v-card-text>
		</v-card>

		<v-dialog width="500px" v-model="postDialog">
      <v-card flat>
        <v-card-title>
          <span>Editar publicación</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
							<v-textarea outlined rows="1" auto-grow hide-details :value="editedTitle" @change="changed => editedTitle = changed"  label="Titulo del post" class="ma-2"/>
            </v-col>

						<v-col cols="12">
							<v-textarea outlined rows="1" auto-grow hide-details :value="editedDescription" @change="changed => editedDescription = changed"  label="Titulo del post" class="ma-2"/>
            </v-col>

						<v-col cols="12">
							<v-textarea outlined rows="1" auto-grow hide-details :value="editedContent" @change="changed => editedContent = changed"  label="Titulo del post" class="ma-2"/>
            </v-col>
          </v-row>
          <v-divider class="mt-5"/>
        </v-card-text>
        
        <v-card-actions>
          <v-spacer/>
          <v-btn text @click="postDialog = false">Cancelar</v-btn>
          <v-btn text class="indigo white--text" @click="editPost({title: editedTitle, description: editedDescription, content: editedContent, id: editedId})">Editar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
	</v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import PostsServices from "@/services/PostServices";
import Post from "@/models/Post"

@Component
export default class PostsComponent extends Vue {
	@Prop() readonly update!: Function
	@Prop() readonly posts!: Post[]
	postDialog: boolean = false
	editedTitle: string = ""
	editedDescription: string =""
	editedContent: string = ""
	editedId: number | null = null

	switchEditPostDialog(post: any) {
    this.editedTitle = post.title
    this.editedDescription = post.description
    this.editedContent = post.content
		this.editedId = post.id
    this.postDialog = true
  }

	deletePost(id: number) {
		PostsServices.deletePost(this, id).then(() => { this.update() })
	}

	editPost(post: Post) {
		PostsServices.patchPost(this, post).then(() => { 
			this.update()
			this.postDialog = false
		})
	}

}

</script>