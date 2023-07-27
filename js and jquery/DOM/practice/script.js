///// changing css///////
const title = document.querySelector('#main-heading');//query selector selects only first occurence of the element
title.style.color = 'red';

const listItems = document.querySelectorAll('.list-items'); // it selects all occurence and stores in Node List
console.log(listItems)
// listItems.style.fontSize = '2rem';// we use camelcase in js. It will not work as it is a node List
for(let i=0;i<listItems.length;i++){
  listItems[i].style.fontSize = '3rem';
}

//// Creating element and adding it////
const ul = document.querySelector('ul');
const li = document.createElement('li');
li.className = "list-item";
ul.append(li);

//// difference between innerText, textContent, innerHTML /////
const firstItem = document.querySelector('.list-items');
console.log(firstItem.innerHTML); //dont use has security issues
console.log(firstItem.innerText); //use this one
console.log(firstItem.textContent);
firstItem.innerText = "X-Men";


//// Modifying Attributes and classes ////
li.setAttribute('id','main-heading');
li.removeAttribute('id')
console.log(title.getAttribute('id'));

li.classList.add('yo');
li.classList.remove('yo');
li.classList.toggle('yo');
console.log(li.classList.contains('yo'))

//// Remove Elements ////

li.remove();

