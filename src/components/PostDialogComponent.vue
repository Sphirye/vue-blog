<template>
	<v-dialog v-model="dialog" persistent width="500px">
		<v-card outlined>
			<v-card-title>
				Nueva publicación
				<v-spacer/>
				<v-btn icon @click="switchDialog()"><v-icon>mdi-close</v-icon></v-btn>
			</v-card-title>
			<v-divider/>
			<v-card-text>
				<div class="mt-5">
					<v-textarea outlined rows="1" auto-grow hide-details :value="title" @change="changedTitle => title = changedTitle"  label="Titulo del post" class="ma-2"/>
					<v-textarea outlined rows="1" auto-grow hide-details :value="description" @change="changedDescription => description = changedDescription"  label="Descripción del post" class="ma-2"/>
					<v-textarea outlined rows="1" auto-grow hide-details :value="content" @change="changedContent => content = changedContent"  label="Contenido del post" class="ma-2"/>
				</div>
			</v-card-text>

			<v-card-actions>
				<v-spacer/>
				<v-btn @click="sendPost()" icon large class="mr-3">
					<v-icon large>mdi-send</v-icon>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { getModule } from "vuex-module-decorators"
import PostsServices from "@/services/PostServices"
import StringTool from "@/services/tools/StringTool"
import SnackbarModule from "@/store/modules/SnackbarModule"

@Component
export default class PostDialogComponent extends Vue {
	@Prop() readonly dialog!: boolean
	@Prop() readonly update!: Function
	@Prop() readonly switchDialog!: any
	title: string = ""
	description: string = ""
	content: string = ""

	sendPost() {
		if (!StringTool.isEmpty([this.title, this.description, this.content])) {
			PostsServices.postPosts(this, this.title, this.description, this.content)
				.then(() => { 
					this.update()
					this.title = ""
					this.description = ""
					this.content = ""
					getModule(SnackbarModule).makeToast("Publicación enviada exitosamente")
					this.switchDialog()
				})
		} else {
			getModule(SnackbarModule).makeToast("Rellena todos los campos para continuar")
		}
	}		
}
</script>