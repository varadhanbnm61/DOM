
//! session Task:-
//? creating elements
const div = document.createElement("div");
const header = document.createElement("header");
const section = document.createElement("section");
const h1 = document.createElement("h1");
const span = document.createElement("span");
const article = document.createElement("article");
const p = document.createElement("p");
//? Adding Content
h1.innerText="this is heading tag";
span.innerText="Hi is this dynamic span";
p.innerText="Hi is this dynamic paragraph";
//?Adding class and id for styles
div.className="container";
header.setAttribute=("style","background-color:black")
h1.setAttribute("class","heading")
section.setAttribute("style","background-color:black")
article.setAttribute("style","background-color:black")
section.classList.add("section","section1")
//? Appending elements
header.appendChild(h1);
section.appendChild(span);
article.appendChild(p);
div.append(header,section,article);
document.body.append(div);







 



