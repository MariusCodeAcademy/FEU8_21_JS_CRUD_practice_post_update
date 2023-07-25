import { crEl } from './helper/crEl.js';
console.log('app.js file was loaded');

const url = 'https://dummyjson.com/posts';

// Declarative way
// Turesim viena pagrindini globalu masyva
// To masyvo reprezentacija bus htmle
// Visi pokyciai bus daromi masyvui, ir iskarto
// juos atspindesim htmle

let mainPostArr = [];

getPosts();

function getPosts() {
  fetch(url + '?limit=10')
    .then((resp) => resp.json())
    .then((atsObj) => {
      mainPostArr = atsObj.posts;
      render();
    })
    .catch(console.warn);
}

function render() {
  // spauzdindami gautime parsiustus duomenis
  console.log('render fn mainPostArr ===', mainPostArr);
  const kasGryzo = makeOnePostEl(mainPostArr[0]);
  console.log('kasGryzo ===', kasGryzo);
}
/*
{
  id: 1,
  title: 'His mother had always taught him',
  body: "His mother ",
  userId: 9,
  tags: ['history', 'american', 'crime'],
  reactions: 2,
}
to 
<li class="post">
  <h3>title</h3>
  <p>intro</p>
  <a class="post-link" href="#">read more...</a>
</li>
*/
function makeOnePostEl(pObj) {
  const liEl = crEl('li', { class: 'post' });
  const titleEl = crEl('h3', {}, pObj.title);
  const pEl = crEl('p', {}, pObj.body.slice(0, 25) + '...');
  const linkEl = crEl(
    'a',
    { class: 'post-link', href: 'single-post.html' },
    'Read more...'
  );
  liEl.append(titleEl, pEl, linkEl);
  // console.log('liEl ===', liEl);
  return liEl;
}
