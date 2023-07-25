export function crEl(tagname, attrsObj = {}, text = '') {
  const newEl = document.createElement(tagname);
  for (key in attrsObj) {
    const value = attrsObj[key];
    newEl.setAttribute(key, value);
  }
  if (text !== '') newEl.textContent = text;
  return newEl;
}
