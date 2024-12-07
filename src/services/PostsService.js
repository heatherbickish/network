import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { AppState } from "@/AppState.js"

class PostsService {
  // async getLikes() {
  //   const response = await api.post('api/posts/:likeId/like')
  //   logger.log(response.data)
  // }


  async getAllPosts() {
    const response = await api.get('api/posts')
    const posts = response.data.posts.map(postPojo => new Post(postPojo))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }

  async changeHomePage(pageNumber) {
    const response = await api.get(`api/posts?page=${pageNumber}`)
    const posts = response.data.posts.map(postPojo => new Post(postPojo))
    AppState.posts = posts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }

  async changeProfilePage(pageNumber, searchQuery) {
    const response = await api.get(`api/posts?page=${searchQuery}&page=${pageNumber}`)
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

  async deletePost(postId) {
    const response = await api.delete(`api/posts/${postId}`)
    const postIndex = AppState.posts.findIndex(post => post.id == postId)
    if (postIndex == -1) {
      throw new Error('you messed up on find index sucka')
    }
    AppState.posts.splice(postIndex, 1)
  }

  async searchPosts(searchQuery) {
    const response = await api.get(`api/posts?query=${searchQuery}`)
    const posts = response.data.posts.map(postPojo => new Post(postPojo))
    AppState.posts = posts
  }

  clearPosts() {
    AppState.posts = null
  }
}
export const postsService = new PostsService()