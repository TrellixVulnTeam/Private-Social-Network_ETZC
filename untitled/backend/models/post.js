const db = require("../util/database");

module.exports = class Post {
  constructor(title, body, link, user) {
    this.title = title, this.body = body, this.link = link, this.user = user;
  }
  static fetchAll() {
    return db.execute("SELECT * FROM posts");
  }

  static save(post) {
    return db.execute(
      "INSERT INTO posts (title, body, link, user) VALUES (?, ?, ?, ?)",
      [post.title, post.body, post.link, post.user]
    );
  }

  static delete(id) {
    return db.execute("DELETE FROM posts WHERE id = ?", [id]);
  }
};
