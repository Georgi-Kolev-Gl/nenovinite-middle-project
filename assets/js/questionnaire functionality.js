//get random questionnaire 
function getRandomQuestionnaire (arr) {
    let random = Math.round(Math.random() * arr.length)
    return arr[random]
  }
  
  //PRINT QUESTIONNARE
  function printQuestionnare (obj, containerToPrint) {
      console.log(obj)
    let currentQuestionnare = obj;
    let titleQuestionnaire = obj.title;
    let h2 = creatElement("h2", titleQuestionnaire, "titleQuestionnaire");
    let div = creatElement("div", "", "questionnaire");
    let allQuestion = Object.keys(obj.questions);
    div.append(h2);
    let form = creatElement("form");
    form.id = "myFormQuestionnare";
    for (i = 0; i < allQuestion.length; i++) {
      let input = creatElement("input");
      input.type = "radio";
      input.name = "vote";
      input.value = `${allQuestion[i]}`;
      let label = creatElement(
        "label",
        `${allQuestion[i]}`,
        "textQuestionnaire"
      );
      let br = creatElement("br")
      form.append(input, label, br)
    }
    let btn = creatElement("input", "ГЛАСУВАЙ")
    btn.id = "vote";
    btn.type = "submit";
    btn.addEventListener("click", function (ev) {
      let options = document.querySelector("input[type='radio'][name='vote']:checked").value;
      currentQuestionnare.questions[options] += 1;
      creatQuestionnare(obj, containerToPrint)
    })
    div.append(form, btn)
    containerToPrint.append(div)
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
    let h2 = creatElement("h2", titleQuestionnaire, "titleQuestionnaire");
    let div = creatElement("div", "", "questionnaire");
    div.append(h2);
    for (i = 0; i < allQuestion.length; i++) {
      let divText = creatElement(
        "p",
        `${allQuestion[i]}`,
        "textQuestionnaire"
      );
      let divPercent = creatElement(
        "p",
        `${result[i]} (${percent[i]}%)`,
        "percentQuestionnaire"
      );
      let widthPercent = percent[i] * 2;
      if (widthPercent > 100) {
        widthPercent = 100;
      }
      divPercent.style.width = widthPercent + "%";
      div.append(divText, divPercent);
    }
    containerToPrint.append(div);
  }
  