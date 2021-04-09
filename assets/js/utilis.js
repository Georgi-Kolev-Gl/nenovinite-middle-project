function getById(id) {
  return document.getElementById(id);
}
function createElement(element, text, className) {
  let newElement = document.createElement(element);
  if (text && text.trim().length > 0) {
    newElement.innerHTML = text;//!!!!
  }
  if (className) {
    newElement.className = className;
  }
  return newElement;
}

function footerStyle(el) {
  let bodyHeigth = document.body.offsetHeight;
  let windowHeigth = window.innerHeight;
  if (windowHeigth < bodyHeigth) {
    el.style.position = 'static';
  } else {
    el.style.position = 'fixed';
    el.style.bottom = "0px";
    el.style.width = "100%";
  }
}

function getTodayDate() {
  let date = Date();
  let today = date.split(' ');
  today.splice(0, 1);
  today.splice(3);
  return strToday = `${today[0]} ${today[1]}, ${today[2]}`;
}
function renderViewBlock(element, arr){
  arr.map(el => { el === element ? el.style.display = "block": el.style.display = "none"});
}
function renderViewFlex(element, arr){
  arr.map(el => { el === element ? el.style.display = "flex": el.style.display = "none"});
}
