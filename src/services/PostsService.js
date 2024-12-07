import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { AppState } from "@/AppState.js"
import lookup from "socket.io-client"

class PostsService {
  async getAllPosts() {
    const response = await api.get('api/posts')
    const posts = response.data.posts.map(postPojo => new Post(postPojo))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }

  async changePage(pageNumber) {
    const response = await api.get(`api/posts?page=${pageNumber}`)
    const posts = response.data.posts.map(postPojo => new Post(postPojo))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }

  async createPost(editablePostFormData) {
    const response = await api.post('api/posts', editablePostFormData)
    const post = new Post(response.data)
    AppState.posts.unshift(post)
  }
}
export const postsService = new PostsService()