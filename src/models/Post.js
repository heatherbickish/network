export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.imgUrl = data.imgUrl
    this.likes = data.likes
    this.likeId = data.likeId
  }
}