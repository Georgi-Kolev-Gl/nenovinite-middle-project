function getById(id) {
  return document.getElementById(id);
}
function creatElement(element, text, className) {
  let newElement = document.createElement(element);
  if (text && text.trim().length > 0) {
    newElement.innerHTML = text;
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
