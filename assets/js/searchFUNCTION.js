function getById(id) {
    return document.getElementById(id);
}

let searchIcon = getById('searchAnchor');
let searchInput = getById('search');
searchIcon.addEventListener('click', function (ev) {
    ev.preventDefault();
    if (searchInput.value) {
        let filteredNewsArr = siteManger.allNews.filter(e => e.title.toLowerCase().includes(searchInput.value));
        console.log(filteredNewsArr);
        console.log(searchInput.value)
    }

})