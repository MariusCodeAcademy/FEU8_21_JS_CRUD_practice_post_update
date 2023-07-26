import { url } from './helper/config.js';

console.log('edit-post.js file was loaded');

// taikomes
const els = {
  form: document.forms[0],
  title: document.getElementById('title'),
  author: document.getElementById('author'),
  date: document.getElementById('date'),
  body: document.getElementById('body'),
  tags: document.getElementById('tags'),
};
console.log('els ===', els);

// gauti id parametra kurio post informacijos reikia
const params = new URLSearchParams(window.location.search);
const postId = params.get('postId');
console.log('postId ===', postId);

// parsiusti to post objekta
function getSinglePost() {
  fetch(`${url}/${postId}`)
    .then((resp) => resp.json())
    .then((postObj) => {
      // iskonsolinti gauta post objekta
      // console.log('postObj ===', postObj);
      postObjToInputs(postObj);
    })
    .catch(console.warn);
}
getSinglePost();

// paimti is objekto reiksmes ir supildyti formos inputus
function postObjToInputs(currentPostObj) {
  console.log('postObjToInputs fn currentPostObj', currentPostObj);
  // paimti reiksmes is currentPostObj ir supildyti
  // destrukturizuojam
  const { title, author, date, body, tags } = currentPostObj;

  // visus formos inputus
  els.title.value = title;
  els.author.value = author;
  els.date.value = date;
  els.body.value = body;
  // join(skirtukas) sujungia masyva i stringa
  els.tags.value = tags.join(', ');
}

// stebeti formos pateikima
els.form.addEventListener('submit', updateFormHandler);

function updateFormHandler(event) {
  // sustabdyti perkrovima
  event.preventDefault();
  console.log('pateikiama forma');
  // pateikiant forma surininkti inputus i objekta
  // paimti visus inputus is formos is sudeti i viena objekta
  const updatedPostData = {
    title: els.title.value.trim(),
    author: els.author.value.trim(),
    body: els.body.value.trim(),
    date: els.date.value,
    tags: els.tags.value.split(',').map((str) => str.trim()),
  };
  console.log('updatedPostData ===', updatedPostData);
  sendPatchFetch(updatedPostData);
}

// siusti patch metodu atnaujinimus
function sendPatchFetch(updatedPostObj) {
  console.log('sendPatchFetch ran', updatedPostObj);
}
