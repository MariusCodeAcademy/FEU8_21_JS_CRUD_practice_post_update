'use strict';
console.log('single-post.js file was loaded');

const url = 'https://dummyjson.com/posts';

// gauti pId is url parametru

const params = new URLSearchParams(window.location.search);
const postId = params.get('pId');
console.log('postId ===', postId);

// parsiusti to posto objekta

function getPostById() {
  fetch(`${url}/${postId}`)
    .then((resp) => resp.json())
    .then((postObj) => {
      console.log('postObj ===', postObj);
    })
    .catch(console.warn);
}
getPostById();
// sugeneruoti html
