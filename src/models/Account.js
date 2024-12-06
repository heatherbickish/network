export class Account {

  constructor(data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.picture = data.picture;
    this.bio = data.bio
    this.class = data.class
    this.github = data.github
    this.graduated = data.graduated
    this.coverImg = data.coverImg
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.linkedin = data.linkedin
    this.resume = data.resume
  }
}
