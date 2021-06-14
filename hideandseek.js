
var titles = document.getElementsByTagName("h2");
for (var i=0;i<titles.length;i++){
    let title = titles[i];
    title.innerHTML = '<span class="mono"> - </span>' + title.innerHTML;
    title.addEventListener('click',onclick,true);
    var evt = document.createEvent("mouseEvent");
    evt.initEvent("click",true,false);
    title.dispatchEvent(evt);
}

function onClick(evt){
    var headerClicked = evt.currentTarget;
    var relatedDiv = headerClicked.nextElementSibling;
    var collapseMark =headerClicked.firstChild;
    var isCollapsed = collapseMark.innerText[0]=='+';
    collapseMark.innerText = isCollapsed ? '-' :'+';
    relatedDiv.setAttribute("style",isCollapsed ? "": "display:none");
}



