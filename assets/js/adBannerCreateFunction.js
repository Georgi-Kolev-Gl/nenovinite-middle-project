function createAd(){
    let random = Math.floor(Math.random() * adForAdBanner.length)
    let url = createElement("a", "", "urlAdBanner")
    url.href = adForAdBanner[random].url;
    let img = createElement("img", "", "imgAdBanner");
    img.src = adForAdBanner[random].img;
    img.alt = adForAdBanner[random].name;
    url.append(img)
    return url
}