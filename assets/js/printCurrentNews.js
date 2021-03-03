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
    let linkUser = creatElement("a", news.user, "news");
    linkUser.href = "userPage";
    let reviewLogo = creatElement("i", "", "fa fa-eye");
    let review = creatElement("span", news.counter.toString(), "reviewText");

    
    let subtitle = news.text.subtitle;
    let text = news.text.description.split(". ");
    let divFirst = creatElement("div", "", "firstPartNews")
    let divSecond = creatElement("div", "", "secondPartNews")
    containerAutorАndRead.append(calendar, date, userLogo, linkUser, reviewLogo, review)
    containerToPrint.append(titleCurrentNews, img, containerAutorАndRead)
    if (subtitle.trim().length > 0){
      let subtitleCurrentNews = creatElement("span", subtitle, "subtitleTextCurrentNews")
      let firstParagraph = creatElement("span", text[0], "subtitleTextCurrentNews")
      divFirst.append(subtitleCurrentNews, firstParagraph)
      let counterParagraph = 3
      for (let i = 1; i < text.length; i++){
        if (i < 3) {
          console.log(i)
          let paragraphText = text[i] + "."
          let currentParagraph = creatElement("p", paragraphText, "subtitleTextParagraph")
          divFirst.append(currentParagraph)
        } else if(i === 3) {
          containerToPrint.append(divFirst)
          counterParagraph += 4;
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
          containerToPrint.append(divSecond)
        } 
      }
    }
  }
  