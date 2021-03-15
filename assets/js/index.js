const HomePage = getById("homeContainer");
const AllNewsPage = getById("allNewsContainer");
const PoliticPage = getById("politicsContainer");
const WorldPage = getById("worldContainer");
const CulturePage = getById("cultureContainer");
const OffsidePage = getById("offsideContainer");
const HoroscopePage = getById("horoscope");
const RubricPage = getById("rubric");
const AddNewsPage = getById("addNews");
const LoginPage = getById("login");
const currentNewsByUser = getById("currentNewsByUser");
const containerPrintAllNewsByUser = getById("containerPrintAllNewsByUser");
const titleContainerPrintAllNewsByUser = getById("AllUserNews");
const Footer_Container = getById('footerContainer');

// LOGIN BUTTONS AND FUNC
const registerForm = getById('registerForm');
const loginForm = getById('loginForm');
registerForm.style.display = 'none';
loginForm.style.display = 'block';
function changeLoginPageInnerHTML() {
  if (!manager.userLoggedIn) {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    location.hash = '#registerFormContainer';
  }
}
const allNewsBox = getById("containerToPrintAllNews");
const politicsNewsBox = getById("containerToPrintPoliticsNews");
const worldNewsBox = getById("containerToPrintWorldNews");
const cultureNewsBox = getById("containerToPrintCultureNews");
const offsideNewsBox = getById("containerToPrintOffsideNews");
const horoscopeNewsBox = getById("containerToPrintHoroscopeNews");
const rubricNewsBox = getById("containerToPrintRubricNews");

function hashChnage() {//CHANGED DISPLAY SETTING TO FLEX
  let currentPage = window.location.hash.slice(1);
  switch (currentPage) {
    case "homeContainer":
      document.title = "Hе!Новините";
      HomePage.style.display = "block";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      readCurrentNews.style.display = "none";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "none";
      break;

    case "allNewsContainer":
      document.title = "Всички Hе!Новините";
      HomePage.style.display = "none";
      AllNewsPage.style.display = "flex";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      readCurrentNews.style.display = "none";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "none";
      break;

    case "politicsContainer":
      document.title = "Политикa и общество";
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "flex";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      readCurrentNews.style.display = "none";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "none";
      break;

    case "worldContainer":
      document.title = "Свят";
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "flex";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      readCurrentNews.style.display = "none";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "none";
      break;

    case "cultureContainer":
      document.title = "Не!Ука и култура";
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "flex";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      readCurrentNews.style.display = "none";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "none";
      break;

    case "offsideContainer":
      document.title = "Не!Засада";
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "flex";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      readCurrentNews.style.display = "none";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "none";
      break;

    case "horoscope":
      document.title = "Не!Хороскоп";
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "flex";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      readCurrentNews.style.display = "none";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "none";
      break;

    case "rubric":
      document.title = "Рубрики";
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "flex";
      AddNewsPage.style.display = "none";
      readCurrentNews.style.display = "none";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "none";
      break;

    case "addNews":
      document.title = "Не!Новините: Напиши новина";
      changeLoginPageInnerHTML();
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "block";
      readCurrentNews.style.display = "none";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "none";
      break;

    case "currentNews":
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      readCurrentNews.style.display = "block";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "none";
      break;
    case "registerFormContainer":
      document.title = "Не!Новините: Вход";
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      readCurrentNews.style.display = "none";
      LoginPage.style.display = "block";
      currentNewsByUser.style.display = "none";
      break;
    case "currentNewsByUser":
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      readCurrentNews.style.display = "none";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "block";
      break;
    default:
      HomePage.style.display = "block";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      LoginPage.style.display = "none";
      currentNewsByUser.style.display = "none";
      break;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  manager.getQuestionnaire(questionnaire);
  manager.getUsers();
  hashChnage();
  footerStyle(Footer_Container);
});
window.addEventListener("hashchange", function () {
  // manager.getQuestionnaire();
  hashChnage();
  footerStyle(Footer_Container);
});
manager.getNews(news);

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

function printSmallCardNews(arr, containerToprint) {
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
      printCurrentNews(currentNews, readCurrentNews)
      localStorage.setItem('News', JSON.stringify(manager.allNews));
    })
  })
}

function prinprintNewsToCarousel(arr, containerToprint) {
  containerToprint.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let currentNews = arr[i];
    if (i === 12) {
      break;
    }
    let cardboxContainer = createElement("div", "", "thumbnail")
    let link = createElement("a", "", "news");
    link.href = "#currentNews";
    let divContainer = createElement("div", "", "newsCard");
    let img = createElement("img");
    img.src = currentNews.img;
    img.alt = currentNews.title;
    let divContainerTitle = createElement("div", "", "newsCardTitle");
    let title = createElement("h3", currentNews.title);
    let currentDate = convertDate(currentNews.date);
    let date = createElement("p", currentDate, "date");
    let text = createElement("p", "Прочети новина", "readNews");
    divContainerTitle.append(title, date, text);
    divContainer.append(img, divContainerTitle);
    link.append(divContainer);
    cardboxContainer.append(link)
    containerToprint.append(cardboxContainer);
    link.addEventListener("click", function () {
      currentNews.counter += 1;
      printCurrentNews(currentNews, readCurrentNews)
      localStorage.setItem('News', JSON.stringify(manager.allNews));
    })
  }
}

// print news to carousel
let politicsCarouselNews = getById("containerHomePagePoliticsNews");
let worldCarouselNews = getById("containerHomePageWorldNews");
let cultureCarouselNews = getById("containerHomePageCultureNews");
let OffsideNews = getById("containerHomePageOffsideNews");
let horoscopeCarouselNews = getById("containerHomePageHoroscopeNews");
let rubricCarouselNews = getById("containerHomePageRubricNews");
let leftArrowPolitics = getById("leftArowPolitics");
let rightArrowPolitics = getById("rightArowPolitics");
let leftArrowWorld = getById("leftArowWorld");
let rightArrowWorld = getById("rightArowWorld");
let leftArrowCulture = getById("leftArowCulture");
let rightArrowCulture = getById("rightArowCulture");
let leftArrowSport = getById("leftArowOffside");
let rightArrowSport = getById("rightArowOffside");
let leftArrowHoroscope = getById("leftArowHoroscope");
let rightArrowHoroscope = getById("rightArowHoroscope");
let leftArrowRubric = getById("leftArowRubric");
let rightArrowRubric = getById("rightArowRubric");
//CHANGED FILTERED NAMES FROM ARR TO INTUITIVE NAMES
let politicsArr = manager.filterNewsByType("politics");
let worldArr = manager.filterNewsByType("world");
let cultureArr = manager.filterNewsByType("culture");
let sportArr = manager.filterNewsByType("sport");
let horoscopeArr = manager.filterNewsByType("horoscope");
let rubricArr = manager.filterNewsByType("rubric");
prinprintNewsToCarousel(politicsArr, politicsCarouselNews);
prinprintNewsToCarousel(worldArr, worldCarouselNews);
prinprintNewsToCarousel(cultureArr, cultureCarouselNews);
prinprintNewsToCarousel(sportArr, OffsideNews);
prinprintNewsToCarousel(horoscopeArr, horoscopeCarouselNews);
prinprintNewsToCarousel(rubricArr, rubricCarouselNews);

politicsCarouselNews.style.left = "0%";
worldCarouselNews.style.left = "0%";
cultureCarouselNews.style.left = "0%";
OffsideNews.style.left = "0%";
horoscopeCarouselNews.style.left = "0%";
rubricCarouselNews.style.left = "0%";

rightArrowPolitics.addEventListener("click", function (event) {
  event.preventDefault();
  let current = politicsCarouselNews.style.left;
  if (current == "-198%") {
    politicsCarouselNews.style.left = 0;
  } else {
    politicsCarouselNews.style.left = parseInt(current) - 99 + "%";
  }
});
leftArrowPolitics.addEventListener("click", function (event) {
  event.preventDefault();
  let current = politicsCarouselNews.style.left;
  if (current == "0px" || current == "0%") {
    politicsCarouselNews.style.left = "-198%";
  } else {
    politicsCarouselNews.style.left = parseInt(current) + 99 + "%";
  }
});

rightArrowWorld.addEventListener("click", function (event) {
  event.preventDefault();
  let current = worldCarouselNews.style.left;
  if (current == "-198%") {
    worldCarouselNews.style.left = 0;
  } else {
    worldCarouselNews.style.left = parseInt(current) - 99 + "%";
  }
});
leftArrowWorld.addEventListener("click", function (event) {
  event.preventDefault();
  let current = worldCarouselNews.style.left;
  if (current == "0px" || current == "0%") {
    worldCarouselNews.style.left = "-198%";
  } else {
    worldCarouselNews.style.left = parseInt(current) + 99 + "%";
  }
});

rightArrowCulture.addEventListener("click", function (event) {
  event.preventDefault();
  let current = cultureCarouselNews.style.left;
  if (current == "-198%") {
    cultureCarouselNews.style.left = 0;
  } else {
    cultureCarouselNews.style.left = parseInt(current) - 99 + "%";
  }
});
leftArrowCulture.addEventListener("click", function (event) {
  event.preventDefault();
  let current = cultureCarouselNews.style.left;
  if (current == "0px" || current == "0%") {
    cultureCarouselNews.style.left = "-198%";
  } else {
    cultureCarouselNews.style.left = parseInt(current) + 99 + "%";
  }
});

rightArrowSport.addEventListener("click", function (event) {
  event.preventDefault();
  let current = OffsideNews.style.left;
  if (current == "-198%") {
    OffsideNews.style.left = 0;
  } else {
    OffsideNews.style.left = parseInt(current) - 99 + "%";
  }
});
leftArrowSport.addEventListener("click", function (event) {
  event.preventDefault();
  let current = OffsideNews.style.left;
  if (current == "0px" || current == "0%") {
    OffsideNews.style.left = "-198%";
  } else {
    OffsideNews.style.left = parseInt(current) + 99 + "%";
  }
});

rightArrowHoroscope.addEventListener("click", function (event) {
  event.preventDefault();
  let current = horoscopeCarouselNews.style.left;
  if (current == "-198%") {
    horoscopeCarouselNews.style.left = 0;
  } else {
    horoscopeCarouselNews.style.left = parseInt(current) - 99 + "%";
  }
});
leftArrowHoroscope.addEventListener("click", function (event) {
  event.preventDefault();
  let current = horoscopeCarouselNews.style.left;
  if (current == "0px" || current == "0%") {
    horoscopeCarouselNews.style.left = "-198%";
  } else {
    horoscopeCarouselNews.style.left = parseInt(current) + 99 + "%";
  }
});

rightArrowRubric.addEventListener("click", function (event) {
  event.preventDefault();
  let current = rubricCarouselNews.style.left;
  if (current == "-198%") {
    rubricCarouselNews.style.left = 0;
  } else {
    rubricCarouselNews.style.left = parseInt(current) - 99 + "%";
  }
});
leftArrowRubric.addEventListener("click", function (event) {
  event.preventDefault();
  let current = rubricCarouselNews.style.left;
  if (current == "0px" || current == "0%") {
    rubricCarouselNews.style.left = "-198%";
  } else {
    rubricCarouselNews.style.left = parseInt(current) + 99 + "%";
  }
})

//SEARCH FUNCТION
searchFunctionality();

//ALL NEWS DIV PRINT
printSmallCardNews(manager.allNews, allNewsBox);

//POLITICS  DIV PRINT
printSmallCardNews(politicsArr, politicsNewsBox);
//WORLD  DIV PRINT
printSmallCardNews(worldArr, worldNewsBox);
//CULTURE  DIV PRINT
printSmallCardNews(cultureArr, cultureNewsBox);
//SPORT DIV PRINT
printSmallCardNews(sportArr, offsideNewsBox);
//HOROSCOPE  DIV PRINT
printSmallCardNews(horoscopeArr, horoscopeNewsBox);
//RUBRIC DIV PRINT
printSmallCardNews(rubricArr, rubricNewsBox);
//RUBRIC DIV PRINT

//current news page
readCurrentNews = getById("currentNews");



