import { crEl } from './helper/crEl.js';
import { url } from './helper/config.js';

console.log('single-post.js file was loaded');

const contentEl = document.getElementById('content');
const deleteBtn = document.getElementById('delete');
const editBtn = document.getElementById('edit');

// gauti pId is url parametru

const params = new URLSearchParams(window.location.search);
const postId = params.get('pId');
console.log('postId ===', postId);

editBtn.addEventListener('click', () => {
  window.location.href = `edit-post.html?postId=${postId}`;
});

deleteBtn.addEventListener('click', () => {
  // gauti console log kai paspaudziam delete mygtuka
  // isspausdinti posto id paspaudus delete mygtuka
  console.log('delete was pressed', postId);
  if (confirm('ar tikrai istrinti?')) {
    deletePostFetch(postId);
  }
});

// parsiusti to posto objekta

function getPostById() {
  fetch(`${url}/${postId}`)
    .then((resp) => resp.json())
    .then((postObj) => {
      // console.log('postObj ===', postObj);
      renderPost(postObj);
    })
    .catch(console.warn);
}
getPostById();
// sugeneruoti html

/*
{
  id: 1,
  title: 'His mother had always taught him',
  body: "His mother ",
  userId: 9,
  tags: ['history', 'american', 'crime'],
  reactions: 2,
}

<h1 class='main-title'>title</h1>
<p class="text">body</p>
<ul class="unlisted">
  <li class="tag">tag</li>
</ul>
<p class="react">2 People liked the post</p>
*/
function renderPost(pObj) {
  // console.log('renderPost ran ', pObj);
  const title = crEl('h1', { class: 'main-title' }, pObj.title);
  const pEl = crEl('p', { class: 'text' }, pObj.body);
  const tagTitle = crEl('h2', { class: 'tag-title' }, 'Tags:');

  const ulEl = crEl('ul', { class: 'unlisted flex tags' });
  pObj.tags.forEach((tagString) => {
    const liEl = crEl('li', { class: 'tag' }, tagString);
    ulEl.append(liEl);
  });
  const pLikes = crEl('p', { class: 'author' }, `Author: ${pObj.author}`);
  contentEl.append(title, pEl, tagTitle, ulEl, pLikes);
}

// delete post from db
function deletePostFetch(idToDelete) {
  console.log('deletePostFetch');
  console.log('idToDelete ===', idToDelete);
  fetch(`${url}/${idToDelete}`, {
    method: 'DELETE',
  })
    .then((resp) => {
      console.log('resp ===', resp);
      if (resp.ok === true) {
        // pavyko istrinti
        // nunaviguoti i indes.html
        window.location.href = 'index.html';
      } else {
        // nepavyko
      }
    })
    .catch((err) => console.warn(err));
}
