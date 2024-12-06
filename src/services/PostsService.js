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
    logger.log(posts)
  }

}
export const postsService = new PostsService()