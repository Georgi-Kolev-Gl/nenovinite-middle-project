(function () {
    let createNewsBtn = document.getElementById("addNewsButton");
    let validateLabel = document.getElementById("validateLabel");
    let addNewsEmail = document.getElementById('addNewsEmail');
    let addNewsShownOfNameOfUser = document.getElementById('addNewsName');
    let typeOfNews = document.getElementById('type');
    let addNewsTitle = document.getElementById('addNewsTitle');
    let addNewsText = document.getElementById('addNewsContent');
    let addImg = document.getElementById('addImg');

    let validateInput = document.getElementById("validateNotRobot");
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
            console.log(true);
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
            console.log('success!');
            alert('Новината е добавена!')
        }
    })
})();

