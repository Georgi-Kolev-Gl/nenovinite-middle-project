(function () {
    let createNewsBtn = getById("addNewsButton");
    let validateLabel = getById("validateLabel");
    let addNewsEmail = getById('addNewsEmail');
    let addNewsShownOfNameOfUser = getById('addNewsName');
    let typeOfNews = getById('type');
    let addNewsTitle = getById('addNewsTitle');
    let addNewsText = getById('addNewsContent');
    let addImg = getById('addImg');

    let validateInput = getById("validateNotRobot");
    function randomNumSumGenerator() {
        let a = Math.floor((Math.random() * 10) + 1);
        let b = Math.floor((Math.random() * 10) + 1);
        validateLabel.innerHTML = `${a} + ${b} =`;
        let result = a + b;
        return result;
    }
    let answer = randomNumSumGenerator();

    function validateAnswer(num) {
        if (num === Number(validateInput.value)) {
            return true
        }
        return false
    }

    createNewsBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (!validateAnswer(answer)) {
            answer = randomNumSumGenerator();
            validateInput.value = '';
            alert('Wrong Answer! Try Again');
        } else {
            let date = getTodayDate();
            let content = {
                subtitle: 'Добавена от потребител- ',
                description: addNewsText.value.trim()
            }
            manager.addNews(addNewsTitle.value, addImg.value, content, date, typeOfNews.value);
            addNewsTitle.value = "";
            addImg.value = "";
            typeOfNews.value = "";
            addNewsText.value = "";
            printSmallCardNews(manager.allNews, allNewsBox);
            getValueFromAnswer ()
            alert('Новината е добавена!')
        }
    })
})();

