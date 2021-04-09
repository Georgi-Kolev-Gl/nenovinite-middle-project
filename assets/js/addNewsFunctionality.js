(function () {
    // SURVEY BTNS
    let btnAddQuestionnaire = getById("addNewsInputDIV");
    let containerAnswer = getById("newQuestionnaireAnswer");
    // NEWS BTNS
    let createNewsBtn = getById("addNewsButton");
    let validateLabel = getById("validateLabel");
    let typeOfNews = getById('type');
    let addNewsTitle = getById('addNewsTitle');
    let addNewsText = getById('addNewsContent');
    let addImg = getById('addImg');
    let validateInput = getById("validateNotRobot");

    // SURVEY FUNC
    function getValueFromAnswer() {
        let NewQuestionnare = {};
        NewQuestionnare.questions = {};
        NewQuestionnare.id = manager.allQuestionnaire.length + 1;
        let title = getById("surveyQuestion").value;
        NewQuestionnare.title = title;
        let answer = document.querySelectorAll(".surveyAnswer");
        answer.forEach(element => {
            if (element.value) {
                NewQuestionnare.questions[element.value] = 0;
            }
        });
        // answer.map(el =>el.value = "");
        manager.addQuestinoary(NewQuestionnare);
    }

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
    // SURVEY ADD ANSWERS EVENT LISTENERS
    btnAddQuestionnaire.addEventListener("click", function (ev) {
        ev.preventDefault();
        let input = createElement("input", "", "surveyAnswer");
        console.log('click');
        input.type = "text";
        let a = createElement("button", "x", "btnRemoveAnswer");
        a.addEventListener("click", function (ev) {
            let element = ev.target.parentElement;
            element.remove();
        })
        let div = createElement("div", "", "containerAnswer");
        div.append(input, a)
        containerAnswer.insertBefore(div, containerAnswer.childNodes[0])
    });
    // ADD NEWS EVENT LISTENERS
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
            printSmallCardNews(manager.allNews, ALL_NEWS_BOX);
            getValueFromAnswer()
            alert('Новината е добавена!')
        }
    })
})();

