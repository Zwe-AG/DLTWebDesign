let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links; //HTMLCollection (array method)   // a tag
val = document.links[0]; // get each link using index number
val = document.links[3];
val = document.links[3].className; // show string
// give class names to get class names
val = document.links[0].id;
val = document.links[0].classList; // show array DOMTokenList(array method)
val = document.links[0].classList[0]; //delete-item
val = document.links[0].classList[1]; // delete-me

val = document.forms; //HTMLCollection
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action;
val = document.forms[0].method;

val = document.images; //HTMLCollection
val = document.images[0];
val = document.images[0].src;
val = document.images[0].className;
val = document.images[0].classList;
val = document.images[0].classList[0];
val = document.images[0].alt;
val = document.images[0].getAttribute("tag"); // js မှာ မပါတဲ့ keyname ကို သုံံးချင်ရင်
val = document.images[0].getAttribute("src"); // js မှာ ပါတဲ့ keyname ကို သုံံးချင်ရင်

val = document.scripts; //HTMLCollection
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute("src");
val = document.scripts[0].getAttribute("type");

// console.log(val);

// 10 3 2021
// Change Styling

document.getElementById("tasktitle").style.background = "green";
document.getElementById("tasktitle").style.color = "white";
document.getElementById("tasktitle").style.padding = "5px";

// Change Content

document.getElementById("tasktitle").textContent = "My List"; // `<span style = "color:yellow">My HTML</span>` do not use because every words in textContent direct appear
document.getElementById("tasktitle").innerText = "My Text"; // `<span style = "color:yellow">My HTML</span>` do not use because every words in innerText direct appear
document.getElementById(
  "tasktitle"
).innerHTML = `<span style = "color:yellow">My HTML</span>`; // can use and only "My HTML" appear

// give or write tasktitle id name in H4 and then use tasktitle id name in H4 but if span text has in H4 , span text remove automatically and add words from coming js

// Call to Class Name

let lis = document.getElementsByClassName("list-group-item");
// console.log(lis); // HTML Collection
// console.log(lis[0]);
// console.log(lis[3]);
// lis[0].style.color = "red";
// lis[1].textContent = "Have to visit"; // name only change and remove list so list and tarch will delete

// Call to tag

// let litags = document.getElementsByTagName("li"); // HTML Collection
// console.log(litags);
// console.log(litags[0]);
// litags[0].style.color = "red";
// litags[1].textContent = "Have to cook";

// QuerySelector(Powerful,  only give one name or one id can use but if you give same names, you cannot use  )
// console.log(document.querySelector("#tasktitle"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));

// Gave same names (li) so We can see red color from first sentence and can affect first sentence of five sentences
// console.log(document.querySelector("li"));
// document.querySelector("li").style.color = "blue";
// document.querySelector("ul li").style.color = "pink";
// document.querySelector("ul li:nth-child(odd)").style.background = "silver"; // Although you paint odd number sentences , you can see only background color changing from first sentence because of querySelector
// document.querySelector("ul li:nth-child(even)").style.background = "green"; // Although you paint even number sentences , you can see only background color changing from second sentence because of querySelector
// document.querySelector("ul li:last-of-type").style.color = "yellow"; // last-child or last-of-type
// document.querySelector("ul li:nth-of-type(3)").textContent = "Have to read";
// 4PPP

// 11/3/2022

const listitems = document
  .querySelector("ul")
  .getElementsByClassName("list-group-item");
// console.log(listitems); // Array => HTML Collection

// document.querySelector("ul li:nth-child(odd)").style.background = "silver";
// document.querySelector("ul li:nth-of-type(even)").style.background = "yellow";

// const listitems = getElementsByClassName("list-group-item");
// console.log(listitems);

// const listitems = document.querySelector("ul li");
// console.log(listitems);

// const listitems = document.querySelector("ul .list-group-item");
// console.log(listitems);

// console.log((listitems[0].textContent = "Hello"));
console.log(typeof listitems);

// 12/3/2022

// To Pure Array
let arritems = Array.from(listitems);
// console.log(arritems);

// arritems.forEach(function (arritems, index) {
//  console.log(index); // Error because of FOREACH is not function
//   arritems.textContent = "Hello";
//   arritems.innerText = `${index} : Hello`;
// }); // This is array because there is length(5) and index numbers but this is HTML Collection (array) that is not pure array so cannot looping and change pure array to looping

// querySelectorAll
let its = document.querySelector("ul.list-group li.list-group-item");
// console.log(its); // HTML Collection(Array) need to change pure array to looping

let itms = document.querySelectorAll("ul.list-group li.list-group-item");
// console.log(itms); // NodeList(Array) no need to change array to looping because NodeList is pure array and can ready do looping
// console.log(itms[0]);

itms.forEach(function (itm, index) {
  // console.log(itm);
  // itm.textContent = "Hello";
  // itm.innerText = `${index} : Hello World`;
});

const liodd = document.querySelectorAll("li:nth-child(odd)");
// console.log(liodd);
const lieven = document.querySelectorAll("li:nth-child(even)");
// console.log(lieven);

// liodd.forEach(function (li, index) {
//   // console.log(li);
//   li.style.background = "grey";
// });

// for (let i = 0; i < lieven.length; i++) {
//   console.log(i);
//   console.log(lieven[i]);
//   lieven[i].style.background = "silver";
// }

// children

let chl;
const getul = document.querySelector("ul.list-group");
// console.log(getul);
const getli = document.querySelector("li.list-group-item:first-child");
// console.log(getli);

chl = document.querySelectorAll("ul.list-group li");

// If you wanna looping, chage pure array
chl = document.getElementsByTagName("ul.list-group li"); // no use tag names in the bracket but one tag name can use
chl = document.getElementsByTagName("li"); // one tag name can use and appear HTML Collection
chl = document.getElementsByClassName("list-group-item"); // also can use and appear HTML Collection
// or
chl = getul.children; // appear also HTML Collection and same as tagname or classname
// console.log(chl);
// console.log(chl[0]);
// chl = getul.children[1];
// console.log(chl);

// getul.children[1].innerText = "Have to read";
getul.children[1].innerHTML = ` Have to eat<a href="#" id="delete-item2" class="delete-item"><i class="fa-solid fa-trash-can"></i></a>`;

//children to children
chl = getul.children[1].children; //HTML Collection
chl = getul.children[1].children[0]; // a tag
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList; //DOM Token List
chl = getul.children[1].children[0].href;
chl = getul.children[1].children[0].getAttribute("href");
chl = getul.children[0].children[0].children;
chl = getul.children[0].children[0].children[0];

//First Child
chl = getul.children[0];
// or
chl = getul.firstElementChild;

//Last Child
chl = getul.children[4];
// or
chl = getul.lastElementChild;

//Child Element Count
chl = getul.children.length; // do not use expext from DOM TOKEN /HTML / NODELIST
// or
chl = getul.childElementCount;

chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;
// console.log(chl);

// Parent Element
const getfirstli = document.querySelector("li.list-group-item:first-child");
let par = getfirstli.parentElement;
// console.log(par); //result ul

// 24/3/2022

// Sibling

// front to move
let sbl = getfirstli; // first li
let abc = sbl.nextElementSibling; // second li
sbl = getfirstli.nextElementSibling.nextElementSibling; // third li
sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling; // fourth li
// console.log(sbl);

// back to move
let psbl = getfirstli.nextElementSibling.nextElementSibling; // // third li
psbl = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling; // second li
psbl =
  getfirstli.nextElementSibling.nextElementSibling.previousElementSibling
    .previousElementSibling; // first li
// console.log(psbl);

// Create Element (li)
let newli = document.createElement("li");
// let newli = document.createElement("img");
// let newli = document.createElement("a");
// let newli = document.createElement("ul");

// Add Class Name

newli.className = "list-group-item";

// Add ID

newli.id = "new-item";

// Add Attribute (qualifiedName,value)

newli.setAttribute("title", "newitem");

// newli.textContent = "Hey";
// newli.innerText = "Hey";
// newli.innerHTML = `List Item 6
// <a href="#" id="delete-item6" class="delete-item"
//   ><i class="fa-solid fa-trash-can"></i
// ></a>`;

// Create Text Node
newli.appendChild(document.createTextNode("Save Myanmar"));

const newlink = document.createElement("a");

// Add class
newlink.className = "delete-item";
// Add ID
newlink.id = "delete-item6";

newlink.href = "#";

// newlink.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
// console.log(newlink);
newli.appendChild(newlink);
// console.log(newli);

document.querySelector("ul.list-group").appendChild(newli);

// Replace Element

const newtitle = document.createElement("h2");

// Add ID
newtitle.id = "task-title";

newtitle.appendChild(document.createTextNode("All My Lists"));
// console.log(newtitle);

const oldtitle = document.getElementById("tasktitle");
// console.log(oldtitle);

// Get Parent
const getCardAction = document.querySelector(".card-action");

//Replace Child(new,old)

getCardAction.replaceChild(newtitle, oldtitle);

//Remove Element
const getlis = document.querySelectorAll("li"); //Node List
// console.log(getlis);
// console.log(getlis[0]);
getlis[0].remove();
getlis[4].remove();
