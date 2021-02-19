class User {
  constructor(firstName, lastName, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.addedNews = [];
  }
  changePassword(oldPassword, newPassword) {
    if (this.password === oldPassword) {
      this.password = newPassword;
    }
  }
  addNews(newsObj) {
    this.addedNews.push(newsObj);
  }
}

class News {
  constructor(title, img, text, date, user, counter, type, id) {
    this.title = title;
    this.img = img;
    this.text = text;
    this.date = date;
    this.user = user;
    this.counter = counter;
    this.type = type;
    this.id = id;
  }
}

class siteManger {
  constructor() {
    this.allNews = [];
  }
  addNewsToAllNews(obj) {
    if (obj instanceof News) {
      this.allNews.push(obj);
    }
  }
  filterNewsByType(type) {
    return this.allNews.filter((el) => el.type === type)
  }
}






