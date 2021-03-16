(function () {   
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
    // PRINT FUNCTION
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
    // PRINTING IN CAROUSEL CONTAINERS
    prinprintNewsToCarousel(politicsArr, politicsCarouselNews);
    prinprintNewsToCarousel(worldArr, worldCarouselNews);
    prinprintNewsToCarousel(cultureArr, cultureCarouselNews);
    prinprintNewsToCarousel(sportArr, OffsideNews);
    prinprintNewsToCarousel(horoscopeArr, horoscopeCarouselNews);
    prinprintNewsToCarousel(rubricArr, rubricCarouselNews);

    // EVENTLISTENERS
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

    //  POSITIONING 
    politicsCarouselNews.style.left = "0%";
    worldCarouselNews.style.left = "0%";
    cultureCarouselNews.style.left = "0%";
    OffsideNews.style.left = "0%";
    horoscopeCarouselNews.style.left = "0%";
    rubricCarouselNews.style.left = "0%";

})();