let btnAddQuestionnaire = getById("addNewsQuestionnaire");
let containerAnswer = getById("newQuestionnaireAnswer");
btnAddQuestionnaire.addEventListener("click", function (ev) {
    ev.preventDefault()
    let input = createElement("input", "", "surveyAnswer")
    input.type = "text"
    let a = createElement("button", "", "btnRemoveAnswer")
    a.addEventListener("click", function (ev) {
        let element = ev.target.parentElement;
        console.log(element)
        element.remove()
    })
    let div = createElement("div", "", "containerAnswer")
    div.append(input, a)
    containerAnswer.insertBefore(div, containerAnswer.childNodes[0])
})

function getValueFromAnswer() {
    let NewQuestionnare = {};
    NewQuestionnare.questions = {};
    NewQuestionnare.id = manager.allQuestionnaire.length + 1;
    let title = getById("surveyQuestion").value
    NewQuestionnare.title = title;
    let answer = document.querySelectorAll(".surveyAnswer");
    answer.forEach(element => {
        if (element.value) {
            NewQuestionnare.questions[element.value] = 0;
        }
    });
    manager.addQuestinoary(NewQuestionnare);
}



