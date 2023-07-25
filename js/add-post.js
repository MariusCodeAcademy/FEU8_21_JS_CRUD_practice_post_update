console.log('add-post.js file was loaded');

// taikomes
const els = {
  form: document.forms[0],
  title: document.getElementById('title'),
  body: document.getElementById('body'),
  tags: document.getElementById('tags'),
};
console.log('els ===', els);

// uzdeti formai submit listeneri
els.form.addEventListener('submit', newPostHandler);

// formos apdorojimo funkcija
/**
 * Pagrindine formo apdorojimo funkcija
 * @param {SubmitEvent} event
 */
function newPostHandler(event) {
  // stabdom perkrovima
  event.preventDefault();
  console.log('submiting form');
  // paimti visus inputus is formos is sudeti i viena objekta
}
