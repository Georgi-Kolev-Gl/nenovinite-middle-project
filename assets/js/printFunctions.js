// CONVERT DATE UTIL FUNC
function convertDate(str) {
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    str = str.trim();
    let arr = str.split(", ");
    let year = arr[1];
    let day = arr[0].split(" ")[1];
    let month = arr[0].split(" ")[0];
    let numberOfMOnth = months.indexOf(month) + 1;
    if (numberOfMOnth <= 9) {
        numberOfMOnth = "0" + numberOfMOnth;
    }
    if (day <= 9) {
        day = "0" + day;
    }
    return day + "." + numberOfMOnth + "." + year;
}

// PRINT SMALL CARDS NEWS
function printSmallCardNews(arr, containerToprint) {
    console.log(arr);
    containerToprint.innerHTML = "";
    let counter = 8;
    arr.forEach((element, index) => {
        let currentNews = element;
        if (index === counter) {
            let banner = createElement("div", "", "adBanner");
            let ad = createAd()
            banner.append(ad)
            containerToprint.append(banner);
            counter += 8;
        }
        let cardboxContainer = createElement("div", "", "thumbnail")
        let link = createElement("a", "", "news");
        link.href = "#currentNews";
        let divContainer = createElement("div", "", "newsCard");
        let img = createElement("img");
        img.src = element.img;
        img.alt = element.title;
        let divContainerTitle = createElement("div", "", "newsCardTitle");
        let title = createElement("h3", element.title);
        let currentDate = convertDate(element.date);
        let date = createElement("p", currentDate, "date");
        let text = createElement("p", "Прочети новина", "readNews");
        divContainerTitle.append(title, date, text);
        divContainer.append(img, divContainerTitle);
        link.append(divContainer);
        cardboxContainer.append(link)
        containerToprint.append(cardboxContainer);
        link.addEventListener("click", function () {
            currentNews.counter += 1;
            printCurrentNews(currentNews, READ_CURRENT_NEWS_CONTAINER)
            localStorage.setItem('News', JSON.stringify(manager.allNews));
        })
    })
}

// PRINT CURRENT NEWS
function printCurrentNews(news, containerToPrint) {
    document.title = news.title;
    containerToPrint.innerHTML = "";
    let banner = createElement("div", "", "adBanner");
    let ad = createAd()
    banner.append(ad)
    containerToPrint.append(banner);
    let titleCurrentNews = createElement("h1", news.title, "titleCurrentNews");
    let img = createElement("img", "", "imgCurrentNews");
    img.src = news.img;
    img.alt = news.title;

    let containerAutorАndRead = createElement("div", "", "containerAutorАndRead");
    let calendar = createElement("i", "", "fa fa-calendar");
    let date = createElement("span", news.date, "dateCurrentNews");
    let userLogo = createElement("i", "", "fa fa-user");
    let userName = news.user
    let linkUser = createElement("a", news.user, "news");
    linkUser.href = "#currentNewsByUser";
    linkUser.addEventListener("click", function () {
        TITLE_CONTAINER_PRINT_ALL_NEWS_BY_USER.innerHTML = `Публикации от ${userName}`;
        printNewsByUser(userName, CONTAINER_PRINT_ALL_NEWS_BY_USER)
    })
    let reviewLogo = createElement("i", "", "fa fa-eye");
    let review = createElement("span", news.counter.toString(), "reviewText");

    let subtitle = news.text.subtitle;
    let text = news.text.description.split(". ");
    let divFirst = createElement("div", "", "firstPartNews")
    let divSecond = createElement("div", "", "secondPartNews")
    containerAutorАndRead.append(calendar, date, userLogo, linkUser, reviewLogo, review)
    containerToPrint.append(titleCurrentNews, img, containerAutorАndRead)
    let containerQuestionnaire = createElement("div", "", "containerQuestionnaire")
    let i = 0

    containerToPrint.append(divFirst)
    if (subtitle.trim().length > 0) {
        let subtitleCurrentNews = createElement("span", subtitle, "subtitleTextCurrentNews")
        let firstParagraph = createElement("span", text[0], "subtitleTextCurrentNews")
        divFirst.append(subtitleCurrentNews, firstParagraph)
        i = 1;
    }
    for (i; i < text.length; i++) {
        if (i < 3) {
            let paragraphText = text[i] + ".";
            let currentParagraph = createElement("p", paragraphText, "subtitleTextParagraph");
            divFirst.append(currentParagraph)
        } else if (i === 3) {
            let banner = createElement("div", "", "adBanner");
            let ad = createAd()
            banner.append(ad)
            containerToPrint.append(banner)
            let paragraphText = text[i] + "."
            let currentParagraph = createElement("p", paragraphText, "subtitleTextParagraph")
            divSecond.append(currentParagraph)
        } else if (i > 3) {
            let paragraphText = text[i] + "."
            let currentParagraph = createElement("p", paragraphText, "subtitleTextParagraph")
            divSecond.append(currentParagraph)
        }
        if (i == text.length - 1) {
            let currentParagraph = createElement("p", "Всички публикации в този сайт са плод на Вашата фантазия, Интернет не съществува", "share-text")
            let divIcon = createElement("div", "", "socialTag")
            let iconFacebook = createElement("a", "", "icon")
            let facebook = createElement("i", "", "fa fa-facebook")
            let iconTwitter = createElement("a", "", "icon")
            let twitter = createElement("i", "", "fa fa-twitter")
            let iconReddit = createElement("a", "", "icon")
            let reddit = createElement("i", "", "fa fa-reddit-alien")
            iconFacebook.append(facebook);
            iconTwitter.append(twitter);
            iconReddit.append(reddit);
            divIcon.append(iconFacebook, iconTwitter, iconReddit);
            divSecond.append(currentParagraph, divIcon)
            let banner = createElement("div", "", "adBanner");
            let ad = createAd()
            banner.append(ad)
            containerToPrint.append(divSecond, banner)
        }
    }
    containerToPrint.append(printQuestionnare(getRandomQuestionnaire(manager.allQuestionnaire), containerQuestionnaire))

    //added similar and polpular news
    let divButton = createElement("div");
    divButton.id = "btnSimilarAndPopularNews";
    let btnSimilar = createElement("button", "Подобни", "inactive");
    btnSimilar.id = "btnSimilar";
    let btnPopular = createElement("button", "Популярни", "active");
    btnPopular.id = "btnPopular";
    divButton.append(btnSimilar, btnPopular);
    containerToPrint.append(divButton);
    let divSimilarNews = createElement("div", "", "similarNews");
    divSimilarNews.id = "similarNews"
    containerToPrint.append(divButton);
    let divPopularNews = createElement("div", "", "popularNews");
    let arraynews = manager.filterNewsByType(news.type)
    printSmallCardNews(arraynews.slice(0, 4), divSimilarNews)
    containerToPrint.append(divSimilarNews)
    let popularNews = manager.sortByViewership(arraynews).slice(0, 4)
    printSmallCardNews(popularNews, divPopularNews)
    containerToPrint.append(divPopularNews)
    btnPopular.addEventListener("click", function (ev) {
        ev.preventDefault();
        btnSimilar.className = "active";
        btnPopular.className = "inactive";
        divPopularNews.style.display = "flex";
        divSimilarNews.style.display = "none";
    })
    btnSimilar.addEventListener("click", function (ev) {
        ev.preventDefault();
        btnSimilar.className = "inactive";
        btnPopular.className = "active";
        divPopularNews.style.display = "none";
        divSimilarNews.style.display = "flex";
    })
}

// PRINT NEWS BY USER
function printNewsByUser(user, containerToPrint) {
    let news = manager.filterByUser(user);
    printSmallCardNews(news, containerToPrint);
}
