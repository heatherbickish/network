import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Account } from "@/models/Account.js"
import { AppState } from "@/AppState.js"
import { Post } from "@/models/Post.js"

class ProfilesService {
  async getPostsByCreatorId(profileId) {
    const response = await api.get(`api/posts/?creatorId=${profileId}`)
    logger.log('got posts by creatorid', response.data)
    const posts = response.data.posts.map(postPojo => new Post(postPojo))
    AppState.posts = posts

  }
  async getProfileById(profileId) {
    const response = await api.get(`api/profiles/${profileId}`)
    const profile = new Account(response.data)
    AppState.activeProfile = profile
    logger.log('got profile by id', profile)
  }

}
export const profilesService = new ProfilesService()