(function(){
const CONTAINERS = [];

CONTAINERS.push(HOME_PAGE, ALL_NEWS_PAGE, POLITIC_PAGE, WORLD_PAGE, CULTURE_PAGE, OFFSIDE_PAGE, HORORSCOPE_PAGE,
  RUBRIC_PAGE, ADD_NEWS_PAGE, LOGIN_PAGE, CURRENT_NEWS_BY_USER, READ_CURRENT_NEWS_CONTAINER);

// LOGIN BUTTONS AND FUNC
const REGISTER_FORM = getById('registerForm');
const LOGIN_FORM = getById('loginForm');
REGISTER_FORM.style.display = 'none';
LOGIN_FORM.style.display = 'block';

// LOGIN PAGE VIEW CONTROLER
function changeLoginPageInnerHTML() {
  if (!manager.userLoggedIn) {
    REGISTER_FORM.style.display = 'none';
    LOGIN_FORM.style.display = 'block';
    location.hash = '#registerFormContainer';
  }
}
// FOOTER BEHAVIOUR FUNC
function footerStyle(el) {
  let bodyHeigth = document.body.offsetHeight;
  let windowHeigth = window.innerHeight;
  if (windowHeigth < bodyHeigth) {
    el.style.position = 'static';
  } else {
    el.style.position = 'fixed';
    el.style.bottom = "0px";
    el.style.width = "100%";
  }
}
// GETTING NEWS DATA !!!
manager.getNews(news);
// END OF GETTING NEWS BY DATA !!!
// FILTERED NEWS BY TYPA ARRAYS


let politicsArr = manager.filterNewsByType("politics");
let worldArr = manager.filterNewsByType("world");
let cultureArr = manager.filterNewsByType("culture");
let sportArr = manager.filterNewsByType("sport");
let horoscopeArr = manager.filterNewsByType("horoscope");
let rubricArr = manager.filterNewsByType("rubric"); 

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
})();






