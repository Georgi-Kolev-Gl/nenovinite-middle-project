function printCurrentNews(news, containerToPrint) {
    containerToPrint.innerHTML = "";
    let banner = creatElement("div", "", "adBanner");
    containerToPrint.append(banner);
    let titleCurrentNews = creatElement("h1", news.title, "titleCurrentNews");
    let img = creatElement("img", "", "imgCurrentNews");
    img.src = news.img;
    img.alt = news.title;

    let containerAutorАndRead = creatElement("div", "", "containerAutorАndRead");
    let calendar = creatElement("i", "", "fa fa-calendar");
    let date = creatElement("span", news.date, "dateCurrentNews");
    let userLogo = creatElement("i", "", "fa fa-user");
    let userName = news.user
    let linkUser = creatElement("a", news.user, "news");
    linkUser.href = "#currentNewsByUser";
    linkUser.addEventListener("click", function () {
      titleContainerPrintAllNewsByUser.innerHTML = `Публикации от ${userName}`
      printNewsByUser (userName, containerPrintAllNewsByUser)
    })
    let reviewLogo = creatElement("i", "", "fa fa-eye");
    let review = creatElement("span", news.counter.toString(), "reviewText");
    
    let subtitle = news.text.subtitle;
    let text = news.text.description.split(". ");
    let divFirst = creatElement("div", "", "firstPartNews")
    let divSecond = creatElement("div", "", "secondPartNews")
    containerAutorАndRead.append(calendar, date, userLogo, linkUser, reviewLogo, review)
    containerToPrint.append(titleCurrentNews, img, containerAutorАndRead)
    let containerQuestionnaire = creatElement ("div", "", "containerQuestionnaire")
    let i = 0
    containerToPrint.append(divFirst)
    if (subtitle.trim().length > 0){
      let subtitleCurrentNews = creatElement("span", subtitle, "subtitleTextCurrentNews")
      let firstParagraph = creatElement("span", text[0], "subtitleTextCurrentNews")
      divFirst.append(subtitleCurrentNews, firstParagraph)
      i = 1;
    }
    for (i; i < text.length; i++){
      if (i < 3) {
        let paragraphText = text[i] + "."
        let currentParagraph = creatElement("p", paragraphText, "subtitleTextParagraph")
        divFirst.append(currentParagraph)
      } else if(i === 3) {
        let banner = creatElement("div", "", "adBanner");
        containerToPrint.append(banner)
        let paragraphText = text[i] + "."
        let currentParagraph = creatElement("p", paragraphText, "subtitleTextParagraph")
        divSecond.append(currentParagraph)
      } else if(i > 3) {
        let paragraphText = text[i] + "."
        let currentParagraph = creatElement("p", paragraphText, "subtitleTextParagraph")
        divSecond.append(currentParagraph)
      } 
      if(i == text.length - 1) {
        let currentParagraph = creatElement("p", "Всички публикации в този сайт са плод на Вашата фантазия, Интернет не съществува", "share-text")
        let divIcon = creatElement("div", "", "socialTag")
        let iconFacebook = creatElement("a", "", "icon")
        let facebook = creatElement("i", "", "fa fa-facebook")
        let iconTwitter = creatElement("a", "", "icon")
        let twitter = creatElement("i", "", "fa fa-twitter")
        let iconReddit = creatElement("a", "", "icon")
        let reddit = creatElement("i", "", "fa fa-reddit-alien")
        iconFacebook.append(facebook);
        iconTwitter.append(twitter);
        iconReddit.append(reddit);
        divIcon.append(iconFacebook, iconTwitter, iconReddit);
        divSecond.append(currentParagraph, divIcon)
        let banner = creatElement("div", "", "adBanner");
        containerToPrint.append(divSecond, banner)
      } 
    }
    containerToPrint.append(printQuestionnare (getRandomQuestionnaire (manager.allQuestionnaire), containerQuestionnaire))

    //added similar and polpular news
    let divButton = document.createElement("div", "", "btnSimilarAndPopularNews");
    let btnSimilar = document.createElement("button");
    btnSimilar.id = "btnSimilar";
    btnSimilar.innerText = "Подобни";
    let btnPopular = document.createElement("button");
    btnPopular.id = "btnPopular";
    btnPopular.innerText = "Популярни"
    divButton.append(btnSimilar, btnPopular);
    containerToPrint.append(divButton);
    let divSimilarNews = document.createElement("div");
    divSimilarNews.id = "similarNews"
    containerToPrint.append(divButton);
    let divPopularNews = document.createElement("div", "", "popularNews");
    let arraynews = addSimilarNews(news.type)
    printSmallCardNews(arraynews.slice(0,4), divSimilarNews)
    containerToPrint.append(divSimilarNews)
    let popularNews = manager.sortByViewership(arraynews).slice(0,4)
    printSmallCardNews(popularNews, divPopularNews)
    containerToPrint.append(divPopularNews)
  }
  