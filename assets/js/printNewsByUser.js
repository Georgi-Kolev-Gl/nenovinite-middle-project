function printNewsByUser(user, containerToPrint) {
   let news = manager.filterByUser(user);
   printSmallCardNews(news, containerToPrint);
}