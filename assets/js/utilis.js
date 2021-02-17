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
