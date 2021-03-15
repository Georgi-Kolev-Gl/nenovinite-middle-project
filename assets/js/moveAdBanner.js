let divAdBanner = getById("adBannerHomePage-box");
let counter = 0;
(function moveAdBanner () {
    divAdBanner.style.marginLeft = counter + "px"
    counter -= 1.5;
    requestAnimationFrame(moveAdBanner);
    if (counter < -5600){
        counter = 940;
    }
})();
