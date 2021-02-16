const HomePage = document.getElementById('homeContainer');
const AllNewsPage = document.getElementById('allNewsContainer');
const PoliticPage = document.getElementById('politicsContainer');
const WorldPage = document.getElementById('worldContainer');
const CulturePage = document.getElementById('cultureContainer');
const OffsidePage = document.getElementById('offsideContainer');
const HoroscopePage = document.getElementById('horoscope');
const RubricPage = document.getElementById('rubric');
const AddNewsPage = document.getElementById('addNews');


function hashChnage() {
    let currentPage = window.location.hash.slice(1);
    console.log(currentPage);
    switch (currentPage) {
        case 'homeContainer':
            HomePage.style.display = 'block';
            AllNewsPage.style.display = 'none';
            PoliticPage.style.display = 'none';
            WorldPage.style.display = 'none';
            CulturePage.style.display = 'none';
            OffsidePage.style.display = 'none';
            HoroscopePage.style.display = 'none';
            RubricPage.style.display = 'none';
            AddNewsPage.style.display = 'none'
            break;

        case 'allNewsContainer':
            HomePage.style.display = 'none';
            AllNewsPage.style.display = 'block';
            PoliticPage.style.display = 'none';
            WorldPage.style.display = 'none';
            CulturePage.style.display = 'none';
            OffsidePage.style.display = 'none';
            HoroscopePage.style.display = 'none';
            RubricPage.style.display = 'none';
            AddNewsPage.style.display = 'none'
            break;

        case 'politicsContainer':
            HomePage.style.display = 'none';
            AllNewsPage.style.display = 'none';
            PoliticPage.style.display = 'block';
            WorldPage.style.display = 'none';
            CulturePage.style.display = 'none';
            OffsidePage.style.display = 'none';
            HoroscopePage.style.display = 'none';
            RubricPage.style.display = 'none';
            AddNewsPage.style.display = 'none'
            break;

        case 'worldContainer':
            HomePage.style.display = 'none';
            AllNewsPage.style.display = 'none';
            PoliticPage.style.display = 'none';
            WorldPage.style.display = 'block';
            CulturePage.style.display = 'none';
            OffsidePage.style.display = 'none';
            HoroscopePage.style.display = 'none';
            RubricPage.style.display = 'none';
            AddNewsPage.style.display = 'none'
            break;

        case 'cultureContainer':
            HomePage.style.display = 'none';
            AllNewsPage.style.display = 'none';
            PoliticPage.style.display = 'none';
            WorldPage.style.display = 'none';
            CulturePage.style.display = 'block';
            OffsidePage.style.display = 'none';
            HoroscopePage.style.display = 'none';
            RubricPage.style.display = 'none';
            AddNewsPage.style.display = 'none'
            break;

        case 'offsideContainer':
            HomePage.style.display = 'none';
            AllNewsPage.style.display = 'none';
            PoliticPage.style.display = 'none';
            WorldPage.style.display = 'none';
            CulturePage.style.display = 'none';
            OffsidePage.style.display = 'block';
            HoroscopePage.style.display = 'none';
            RubricPage.style.display = 'none';
            AddNewsPage.style.display = 'none'
            break;

        case 'horoscope':
            HomePage.style.display = 'none';
            AllNewsPage.style.display = 'none';
            PoliticPage.style.display = 'none';
            WorldPage.style.display = 'none';
            CulturePage.style.display = 'none';
            OffsidePage.style.display = 'none';
            HoroscopePage.style.display = 'block';
            RubricPage.style.display = 'none';
            AddNewsPage.style.display = 'none'
            break;

        case 'rubric':
            HomePage.style.display = 'none';
            AllNewsPage.style.display = 'none';
            PoliticPage.style.display = 'none';
            WorldPage.style.display = 'none';
            CulturePage.style.display = 'none';
            OffsidePage.style.display = 'none';
            HoroscopePage.style.display = 'none';
            RubricPage.style.display = 'block';
            AddNewsPage.style.display = 'none';            
            break;

        case 'addNews':
            HomePage.style.display = 'none';
            AllNewsPage.style.display = 'none';
            PoliticPage.style.display = 'none';
            WorldPage.style.display = 'none';
            CulturePage.style.display = 'none';
            OffsidePage.style.display = 'none';
            HoroscopePage.style.display = 'none';
            RubricPage.style.display = 'none';
            AddNewsPage.style.display = 'block';
            break;

        default:
            HomePage.style.display = 'block';
            AllNewsPage.style.display = 'none';
            PoliticPage.style.display = 'none';
            WorldPage.style.display = 'none';
            CulturePage.style.display = 'none';
            OffsidePage.style.display = 'none';
            HoroscopePage.style.display = 'none';
            RubricPage.style.display = 'none';
            AddNewsPage.style.display = 'none';
            break;
    }
}

window.addEventListener('DOMContentLoaded', hashChnage);
window.addEventListener('hashchange', hashChnage)