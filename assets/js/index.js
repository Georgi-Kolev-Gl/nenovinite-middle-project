const HOME_PAGE = getById("homeContainer");
const ALL_NEWS_PAGE = getById("allNewsContainer");
const POLITIC_PAGE = getById("politicsContainer");
const WORLD_PAGE = getById("worldContainer");
const CULTURE_PAGE = getById("cultureContainer");
const OFFSIDE_PAGE = getById("offsideContainer");
const HORORSCOPE_PAGE = getById("horoscope");
const RUBRIC_PAGE = getById("rubric");
const ADD_NEWS_PAGE = getById("addNews");
const LOGIN_PAGE = getById("login");
const CURRENT_NEWS_BY_USER = getById("currentNewsByUser");
const CONTAINER_PRINT_ALL_NEWS_BY_USER = getById("containerPrintAllNewsByUser");
const TITLE_CONTAINER_PRINT_ALL_NEWS_BY_USER = getById("AllUserNews");
const FOOTER_CONTAINER = getById('footerContainer');
const READ_CURRENT_NEWS_CONTAINER = getById("currentNews");
const CONTAINERS = [];
CONTAINERS.push(HOME_PAGE, ALL_NEWS_PAGE, POLITIC_PAGE, WORLD_PAGE, CULTURE_PAGE, OFFSIDE_PAGE, HORORSCOPE_PAGE,
  RUBRIC_PAGE, ADD_NEWS_PAGE, LOGIN_PAGE, CURRENT_NEWS_BY_USER, READ_CURRENT_NEWS_CONTAINER);

// LOGIN BUTTONS AND FUNC
const REGISTER_FORM = getById('registerForm');
const LOGIN_FORM = getById('loginForm');
REGISTER_FORM.style.display = 'none';
LOGIN_FORM.style.display = 'block';
function changeLoginPageInnerHTML() {
  if (!manager.userLoggedIn) {
    REGISTER_FORM.style.display = 'none';
    LOGIN_FORM.style.display = 'block';
    location.hash = '#registerFormContainer';
  }
}
const ALL_NEWS_BOX = getById("containerToPrintAllNews");
const POLITICS_NEWS_BOX = getById("containerToPrintPoliticsNews");
const WORLD_NEWS_BOX = getById("containerToPrintWorldNews");
const CULTURE_NEWS_BOX = getById("containerToPrintCultureNews");
const OFFSIDE_NEWS_BOX = getById("containerToPrintOffsideNews");
const HOROSCOPE_NEWS_BOX = getById("containerToPrintHoroscopeNews");
const RUBRIC_NEWS_BOX = getById("containerToPrintRubricNews");

function hashChnage() {//CHANGED DISPLAY SETTING TO FLEX
  let currentPage = window.location.hash.slice(1);
  switch (currentPage) {
    //HOME PAGE
    case "homeContainer":
      document.title = "Hе!Новините";
      renderViewBlock(HOME_PAGE, CONTAINERS);
      break;
    // ALL NEWS PAGE
    case "allNewsContainer":
      document.title = "Всички Hе!Новините";
      renderViewFlex(ALL_NEWS_PAGE, CONTAINERS);
      break;
    // POLITC PAGE
    case "politicsContainer":
      document.title = "Политикa и общество";
      renderViewFlex(POLITIC_PAGE, CONTAINERS);
      break;
    // WORLD PAGE
    case "worldContainer":
      document.title = "Свят";
      renderViewFlex(WORLD_PAGE, CONTAINERS);
      break;
    // CULTURE PAGE
    case "cultureContainer":
      document.title = "Не!Ука и култура";
      renderViewFlex(CULTURE_PAGE, CONTAINERS);
      break;
    // OFFSIDE PAGE
    case "offsideContainer":
      document.title = "Не!Засада";
      renderViewFlex(OFFSIDE_PAGE, CONTAINERS);
      break;
    // HOROSCOPE PAGE
    case "horoscope":
      document.title = "Не!Хороскоп";
      renderViewFlex(HORORSCOPE_PAGE, CONTAINERS);
      break;
    // RUBRIC PAGE
    case "rubric":
      document.title = "Рубрики";
      renderViewFlex(RUBRIC_PAGE, CONTAINERS);
      break;
    // ADD NEWS PAGE
    case "addNews":
      document.title = "Не!Новините: Напиши новина";
      changeLoginPageInnerHTML();
      renderViewBlock(ADD_NEWS_PAGE, CONTAINERS);
      break;
    // CURRENT PAGE
    case "currentNews":
      renderViewBlock(READ_CURRENT_NEWS_CONTAINER, CONTAINERS);
      break;
    // REGISTER/LOGIN PAGE
    case "registerFormContainer":
      document.title = "Не!Новините: Вход";
      renderViewBlock(LOGIN_PAGE, CONTAINERS);
      break;
    // CURRENT NEWS BY USER
    case "currentNewsByUser":
      renderViewBlock(CURRENT_NEWS_BY_USER, CONTAINERS);
      break;
    // DEFAULT PAGE/ HOME PAGE
    default:
      renderViewBlock(HOME_PAGE, CONTAINERS);
      break;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  manager.getQuestionnaire(questionnaire);
  manager.getUsers();
  hashChnage();
  footerStyle(FOOTER_CONTAINER);
});
window.addEventListener("hashchange", function () {
  // manager.getQuestionnaire();
  hashChnage();
  footerStyle(FOOTER_CONTAINER);
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
      printCurrentNews(currentNews, READ_CURRENT_NEWS_CONTAINER)
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
      printCurrentNews(currentNews, READ_CURRENT_NEWS_CONTAINER)
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
printSmallCardNews(manager.allNews, ALL_NEWS_BOX);

//POLITICS  DIV PRINT
printSmallCardNews(politicsArr, POLITICS_NEWS_BOX);
//WORLD  DIV PRINT
printSmallCardNews(worldArr, WORLD_NEWS_BOX);
//CULTURE  DIV PRINT
printSmallCardNews(cultureArr, CULTURE_NEWS_BOX);
//SPORT DIV PRINT
printSmallCardNews(sportArr, OFFSIDE_NEWS_BOX);
//HOROSCOPE  DIV PRINT
printSmallCardNews(horoscopeArr, HOROSCOPE_NEWS_BOX);
//RUBRIC DIV PRINT
printSmallCardNews(rubricArr, RUBRIC_NEWS_BOX);
//RUBRIC DIV PRINT






