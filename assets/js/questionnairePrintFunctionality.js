function getRandomQuestionnaire (arr) {
    let random = Math.floor(Math.random() * arr.length)
    return arr[random]
  }
  
  //PRINT QUESTIONNARE
  function printQuestionnare (obj, containerToPrint) {
    let currentQuestionnare = obj;
    let titleQuestionnaire = obj.title;
    let h2 = createElement("h2", titleQuestionnaire, "titleQuestionnaire");
    let div = createElement("div", "", "formWrapper");
    let allQuestion = Object.keys(obj.questions);
    div.append(h2);
    let containerQuestionnaire = createElement("div", "", "containerAllQuestion")
    let containerVote = createElement("div", "", "myFormQuestionnare")
    let form = createElement("form");
    form.id = "myFormQuestionnare";
    let divText = createElement("div", "", "questionnaireTEXT");
    for (i = 0; i < allQuestion.length; i++) {
      let input = createElement("input");
      input.type = "radio";
      input.name = "vote";
      input.value = `${allQuestion[i]}`;
      let label = createElement(
        "label",
        `${allQuestion[i]}`,
        "textQuestionnaire"
      );
      let br = createElement("br");
      divText.append(input, label, br);
    }
    let btn = createElement("button", "ГЛАСУВАЙ");
    btn.id = "vote";

    btn.addEventListener("click", function (ev) {
      let options = document.querySelector("input[type='radio'][name='vote']:checked").value;
      currentQuestionnare.questions[options] += 1;
      creatQuestionnare(obj, containerToPrint);
    })
    form.append(divText, btn);
    containerVote.append(form)
    div.append(containerVote)
    containerVote.append(form, btn)
    div.append(containerVote)
    containerQuestionnaire.append(div)
    containerToPrint.append(containerQuestionnaire)
    return containerToPrint
  }
  
  // SHOW PERCENT OF VOTE
  function creatQuestionnare(obj, containerToPrint) {
    containerToPrint.innerHTML = ""
    let allQuestion = Object.keys(obj.questions);
    let result = Object.values(obj.questions);
    let averageSum = 0;
    averageSum = 100 / result.reduce((sum, el) => sum + el, 0);
    let percent = result.map((el) => Math.round(el * averageSum));
    let titleQuestionnaire = obj.title;
    let containerQuestionnaire = createElement("div", "", "containerVote")
    let h2 = createElement("h2", titleQuestionnaire, "titleQuestionnaire");
    let div = createElement("div", "", "questionnaire");
    div.append(h2);
    for (i = 0; i < allQuestion.length; i++) {
      let divText = createElement(
        "p",
        `${allQuestion[i]}`,
        "textQuestionnaire"
      );
      let divPercent = createElement(
        "p",
        `${result[i]} (${percent[i]}%)`,
        "percentQuestionnaire"
      );
      let widthPercent = percent[i] 
      divPercent.style.width = widthPercent + "%";
      div.append(divText, divPercent);
    }
    containerQuestionnaire.append(div)
    containerToPrint.append(containerQuestionnaire);
  }

