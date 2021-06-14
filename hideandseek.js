
var titles = document.getElementsByTagName('h2');
for (var i = 0; i < titles.length; i++) {
    var title = titles[i];
    title.innerHTML = '<span class="mono">- </span>'
        + title.innerHTML;
    title.addEventListener('click', onClick, true);
    var evt = document.createEvent("mouseEvent");
    evt.initEvent("click", true, false);
    title.dispatchEvent(evt);
    title.style.color = "red";
}

var content = document.getElementsByTagName('p');

for (var i=0; i<content.length;i++){
    content[i].style.color = "darkcyan";
}

function onClick(evt) {
    var headerClicked = evt.currentTarget;
    var relatedDiv = headerClicked.nextElementSibling;
    var collapseMark = headerClicked.firstChild;
    var isCollapsed = collapseMark.innerText[0] == "+";
    collapseMark.innerText = isCollapsed ? "- " : "+ ";
    relatedDiv.setAttribute("style",
        isCollapsed ? "" :"display: none");
}

// list creation using DOM operations
var ul = document.createElement('ul');
// styling ul
ul.innerHTML = "Web Technologies:"
ul.style.color ="red";

var liItem1 = document.createElement('li');
liItem1.innerHTML = "HTML";
var liItem2 = document.createElement('li');
liItem2.innerHTML = "CSS";
var liItem3 = document.createElement('li');
liItem3.innerHTML = "Javascript";

var content = document.querySelector('#list');
content.appendChild(ul);

var ulcontent = document.querySelector('ul');
ulcontent.appendChild(liItem1);
ulcontent.appendChild(liItem2);
ulcontent.appendChild(liItem3);
// styling list items
ulcontent.style.color = "cyan";