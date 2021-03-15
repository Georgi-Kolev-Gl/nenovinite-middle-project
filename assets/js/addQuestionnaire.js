let btnAddQuestionnaire = getById("addNewsInputDIV");
let containerAnswer = getById("newQuestionnaireAnswer");
btnAddQuestionnaire.addEventListener("click", function (ev) {
    ev.preventDefault()
    let input = createElement("input", "", "surveyAnswer")
    input.type = "text"
    let a = createElement("button", "x", "btnRemoveAnswer")
    a.addEventListener("click", function(ev){
        let element = ev.target.parentElement;
        console.log(element)
        element.remove()
    })
    let div = createElement("div", "", "containerAnswer")
    div.append(input, a)
    containerAnswer.insertBefore(div, containerAnswer.childNodes[0])
})

function getValueFromAnswer () {
    let arr = []
   let NewQuestionnare = {};
   NewQuestionnare.question = {};
   NewQuestionnare.id = 50;
   let title = getById("surveyQuestion").value
   NewQuestionnare.title = title;
   let answer = document.querySelectorAll(".surveyAnswer");
   answer.forEach(element => {
       if (element.value){
        NewQuestionnare.question[element.value] = 0;
       }
   });
   arr.push(NewQuestionnare)
   questionnaire.push(NewQuestionnare)
   manager.addQuestionnaire(arr)
   
}

// let questionnare = {};
// questionnare.question = {};
// questionnare.question.afag = 4;
// console.log(questionnare)

