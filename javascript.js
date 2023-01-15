container = document.getElementsByClassName('container');
var size = 16;
var i = 0;
var blocks;

function calcwidth() {
    var width = 768 / size;
    return width + 'px';
}

function calcheight() {
    var height = 768 / size;
    return height + 'px';
}


function creategrid() {
    blocks = size * size;
    if (i < blocks ){
        var div = document.createElement('div');
        div.className = 'block';
        div.style.width = calcwidth();
        div.style.height = calcheight();
        div.style.float = 'left';
        div.style.border = '1px solid black';
        div.style.boxSizing = 'border-box';
        div.style.backgroundColor = 'white';
        container[0].appendChild(div); 
        i++;
        creategrid();
    }
}