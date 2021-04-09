function searchFunctionality() {
    let searchIcon = getById('searchAnchor');
    let searchInput = getById('search');
    let allNewsAnchor = document.querySelector('.navUl li a');
    function searchNews(string) {
        if (string) {
            let filteredNewsArr = manager.allNews.filter(e => e.title.toLowerCase().includes(string));
            if(filteredNewsArr.length < 1){
                alert(`Няма намерена новина`);                
                location.hash = '#allNewsContainer';
            }else{
                console.log(filteredNewsArr);//CONSOLE.LOG for test purposes
                printSmallCardNews(filteredNewsArr, ALL_NEWS_BOX);
                location.hash = '#allNewsContainer';
                console.log(string);
            }            
        }
    }
    searchIcon.addEventListener('click', function (ev) {
        ev.preventDefault();
        let input = searchInput.value.toLowerCase();
        searchNews(input);
        searchInput.value = '';
    });
    searchInput.addEventListener('keyup', function (ev) {
        if (ev.key === 'Enter') {
            let input = searchInput.value.toLowerCase();
            searchNews(input);
            searchInput.value = '';
        }
    })
    allNewsAnchor.addEventListener('click', function () {
        printSmallCardNews(manager.allNews, ALL_NEWS_BOX);
        searchInput.value = '';
    })
}



