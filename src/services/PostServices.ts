import ConstantTool from "@/services/tools/ConstantTool"
import axios from "axios"
import Vue from "vue-property-decorator"
import Post from "@/models/Post"
import JsonTool from "@/services/tools/JsonTool"
import { getModule } from "vuex-module-decorators";
import SnackbarModule from "@/store/modules/SnackbarModule";


export default class PostService {
	static async getPosts (component: Vue, posts: Post[]) {
		// @ts-ignore
		component.loading = true

		try {
			const response = await axios.get(ConstantTool.BASE_URL + "/posts")
			let list = JsonTool.jsonConvert.deserializeArray(response.data, Post)
			posts.splice(0, posts.length)
			list.forEach(v => posts.push(v))
			// @ts-ignore
			component.loading = false
		} catch (err) {
			// @ts-ignore
			component.loading = false
			getModule(SnackbarModule).makeToast("No se pudieron obtener los posts")
			console.log(err)
		}
	}

	static async postPosts (component: Vue, title: string, description: string, content: string) {
		
		// @ts-ignore
		component.loading = true

		let formData = new FormData()
		formData.set("title", title)
		formData.set("description", description)
		formData.set("content", content)

//		let newPost = {
//			title: title,
//			description: description,
//			content: content
//		}

		try {
			await axios.post(ConstantTool.BASE_URL + "/posts", formData)
			// @ts-ignore
			component.loading = false
			getModule(SnackbarModule).makeToast("Publicación enviada correctamente")
		} catch (err) {
			console.log(err)
			getModule(SnackbarModule).makeToast("No se pudo enviar el post")
		}
	}

	static async deletePost (component: Vue, id: number){

		// @ts-ignore
		component.loading = true

		try {
			await axios.delete(`${ConstantTool.BASE_URL}/posts/${id}`)
			// @ts-ignore
			component.loading = false
			getModule(SnackbarModule).makeToast("La publicación se elimino correctamente")
		} catch (err) {
			console.log(err)
			getModule(SnackbarModule).makeToast("No se pudo eliminar la publicación")
		}
	}

	static async patchPost (component: Vue, post: Post){

		// @ts-ignore
		component.loading = true

		try {
			await axios.patch(`${ConstantTool.BASE_URL}/posts/${post.id}`, post)
			// @ts-ignore
			component.loading = false
		} catch (err) {
			console.log(err)
		}
	}
}