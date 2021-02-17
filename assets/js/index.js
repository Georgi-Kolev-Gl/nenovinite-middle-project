const HomePage = document.getElementById("homeContainer");
const AllNewsPage = document.getElementById("allNewsContainer");
const PoliticPage = document.getElementById("politicsContainer");
const WorldPage = document.getElementById("worldContainer");
const CulturePage = document.getElementById("cultureContainer");
const OffsidePage = document.getElementById("offsideContainer");
const HoroscopePage = document.getElementById("horoscope");
const RubricPage = document.getElementById("rubric");
const AddNewsPage = document.getElementById("addNews");

function hashChnage() {
  let currentPage = window.location.hash.slice(1);
  console.log(currentPage);
  switch (currentPage) {
    case "homeContainer":
      HomePage.style.display = "block";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      break;

    case "allNewsContainer":
      HomePage.style.display = "none";
      AllNewsPage.style.display = "block";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      break;

    case "politicsContainer":
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "block";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      break;

    case "worldContainer":
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "block";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      break;

    case "cultureContainer":
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "block";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      break;

    case "offsideContainer":
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "block";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      break;

    case "horoscope":
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "block";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "none";
      break;

    case "rubric":
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "block";
      AddNewsPage.style.display = "none";
      break;

    case "addNews":
      HomePage.style.display = "none";
      AllNewsPage.style.display = "none";
      PoliticPage.style.display = "none";
      WorldPage.style.display = "none";
      CulturePage.style.display = "none";
      OffsidePage.style.display = "none";
      HoroscopePage.style.display = "none";
      RubricPage.style.display = "none";
      AddNewsPage.style.display = "block";
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
      break;
  }
}

window.addEventListener("DOMContentLoaded", hashChnage);
window.addEventListener("hashchange", hashChnage);

//create site manager and add news to manager
let manager = new siteManger();
news.forEach(function (el) {
  let newNews = new News(
    el.title,
    el.image,
    el.text,
    el.data,
    el.user,
    el.counter,
    el.type,
    el.id
  );
  manager.addNewsToAllNews(newNews);
});


//add id to news
function addId(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].id = i + 1;
    }
  }
  addId(news);

//convert data from news
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
  let counter = 9;
  arr.forEach((element, index) => {
    if (index === counter) {
      let ad = creatElement("div", "", "adBanner");
      containerToprint.append(ad);
      counter += 8;
    }
    let link = creatElement("a", "", "news");
    link.href = "#currentNews";
    let divContainer = creatElement("div", "", "newsCard");
    let img = creatElement("img");
    img.src = element.img;
    img.alt = element.title;
    let divContainerTitle = creatElement("div", "", "newsCardTitle");
    let title = creatElement("h3", element.title);
    let currentDate = convertDate(element.data);
    let date = creatElement("p", currentDate, "date");
    let text = creatElement("p", "Прочети новина", "readNews");
    divContainerTitle.append(title, date, text);
    divContainer.append(img, divContainerTitle);
    link.append(divContainer);
    containerToprint.append(link);
  });
}


function prinprintNewsToCarousel(arr, containerToprint) {
  containerToprint.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (i === 12) {
      break;
    }
    let link = creatElement("a", "", "news");
    link.href = "#currentNews";
    let divContainer = creatElement("div", "", "newsCard");
    let img = creatElement("img");
    console.log(element);
    img.src = element.img;
    img.alt = element.title;
    let divContainerTitle = creatElement("div", "", "newsCardTitle");
    let title = creatElement("h3", element.title);
    let currentDate = convertDate(element.date);
    
    let date = creatElement("p", currentDate, "date");
    let text = creatElement("p", "Прочети новина", "readNews");
    divContainerTitle.append(title, date, text);
    divContainer.append(img, divContainerTitle);
    link.append(divContainer);
    containerToprint.append(link);
  }
}

// print news to carousel
let politicsCarouselNews = getById("containerHomePagePoliticsNews");
let worldCarouselNews = getById("containerHomePageWorldNews");
let cultureCarouselNews = getById("containerHomePageCultureNews");
let OffsideNews = getById("containerHomePageOffsideNews");
let horoscopeCarouselNews = getById("containerHomePageHoroscopeNews");
let rubricCarouselNews = getById("containerHomePageRubricNews");
let arr1 = manager.filterNewsByType("politics");
let arr2 = manager.filterNewsByType("world");
let arr3 = manager.filterNewsByType("culture");
let arr4 = manager.filterNewsByType("sport");
let arr5 = manager.filterNewsByType("horoscope");
let arr6 = manager.filterNewsByType("rubric");
prinprintNewsToCarousel(arr1, politicsCarouselNews)
prinprintNewsToCarousel(arr2, worldCarouselNews)
prinprintNewsToCarousel(arr3, cultureCarouselNews)
prinprintNewsToCarousel(arr4, OffsideNews)
prinprintNewsToCarousel(arr5, horoscopeCarouselNews)
prinprintNewsToCarousel(arr6, rubricCarouselNews);