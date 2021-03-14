let btnAddQuestionnaire = getById("addNewsQuestionnaire");
let containerAnswer = getById("newQuestionnaireAnswer");
btnAddQuestionnaire.addEventListener("click", function (ev) {
    ev.preventDefault()
    let input = createElement("input", "", "surveyAnswer")
    input.type = "text"
    
    let a = createElement("button", "", "btnRemoveAnswer")
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
   let questionnare = {};
   questionnare.question = {};
   questionnaire.id = 50;
   let title = getById("surveyQuestion").value
   questionnare.title = title;
   let answer = document.querySelectorAll(".surveyAnswer");
   let arrayAnswer = [];
   answer.forEach(element => {
       if (element.value){
        questionnare.question[element.value] = 0;
        arrayAnswer.push(element.value);
       }
   });
   arr.push(questionnare)
   manager.addQuestionnaire(arr)
   return questionnare;
}

// let questionnare = {};
// questionnare.question = {};
// questionnare.question.afag = 4;
// console.log(questionnare)

