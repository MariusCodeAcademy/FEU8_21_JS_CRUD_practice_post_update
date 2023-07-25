'use strict';
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
}
