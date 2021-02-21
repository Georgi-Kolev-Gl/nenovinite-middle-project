function searchFunctionality() {
    let searchIcon = getById('searchAnchor');
    let searchInput = getById('search');
    let allNewsAnchor = document.querySelector('.navUl li a');
    function searchNews(string) {
        if (string) {
            let filteredNewsArr = manager.allNews.filter(e => e.title.toLowerCase().includes(string));
            console.log(filteredNewsArr);//CONSOLE.LOG for test purposes
            printSmallCardNews(filteredNewsArr, AllNewsPage);
            location.hash = '#allNewsContainer';
            console.log(string);
        }
    }
    searchIcon.addEventListener('click', function (ev) {
        ev.preventDefault();
        let input = searchInput.value.toLowerCase();
        searchNews(input);
    });
    searchInput.addEventListener('keyup', function (ev) {
        if (ev.key === 'Enter') {
            let input = searchInput.value.toLowerCase();
            searchNews(input);
        }
    })
    allNewsAnchor.addEventListener('click', function () {
        printSmallCardNews(manager.allNews, AllNewsPage);
        searchInput.value = '';
    })
}



