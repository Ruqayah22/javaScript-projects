// // examine the document object //

// // console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123; // change the title 
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

////////////////////////////////////////////////////////////

// selectors
// 1. get element by id  //

// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = "Goodbye";

// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = '<h3>Hello</h3>'

// header.style.borderBottom = 'solid 3px #000'       // to change the style

// 2. get elements by class name //

// var items = document.getElementsByClassName("list-group-item");
// // console.log(items);
// // console.log(items[1]);
// items[1].textContent='hello2'
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor ='#f4f4f4' // didn't work

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
    
// }

// 3. get elements by tag name //

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent='hello2'
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = 'yellow';

// // li.style.backgroundColor ='#f4f4f4' // didn't work

// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
    
// }


///////////////////////////////////////////////////////////////////////////////

// query selector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = "hello world";

// var submit = document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'  // change the first one only 

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = 'blue'

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

// query selector all

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent= 'hello'

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "#f4f4f4";
//     even[i].style.backgroundColor = "#ccc";
// }

///////// **************************** /////////

// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
// parentNode 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
 
// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);
 
// childNode 
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent ='hello 1'

// // lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.firstElementChild);
// itemList.lastElementChild.textContent = 'hello 4'

// // nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling;
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling;
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//  creating Dom elements from JavaScript and inserting them //

// create Element 

// create div 
var newDiv = document.createElement('div');

// add class 
newDiv.className = 'hello';

// add id 
newDiv.id = 'hello1';

// add attributes
newDiv.setAttribute('title', 'hello div');

// create text node 
var newDivText = document.createTextNode('hello world');

// add text to div 
newDiv.appendChild(newDivText);

// add the div to the dom, now it in the javaScript 
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1); // newDiv -> what we want to add, h1 -> before what we want to add it 










