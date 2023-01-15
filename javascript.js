container = document.getElementsByClassName('container');
var size = 20;
var i = 0;
var blocks;

//run creategrid function on page load
creategrid();


//calculate width by, dividing 768 (the size of container) by the size of the grid
function calcwidth() {
    var width = 768 / size;
    return width + 'px';
}
//calculate height by, dividing 768 (the size of container) by the size of the grid

function calcheight() {
    var height = 768 / size;
    return height + 'px';
}

/*create a grid by, checking if i is less than total number of blocks, if so, create a div, add class block
, set width and height, set float to left, set border, set box-sizing to border-box,
 set background color to white, append div to container, 
 increment i by 1, and run creategrid function again
*/
function creategrid() {
    var wide = calcwidth();
    var high = calcheight();
    blocks = size * size;
    grid();
    function grid() {
    while (i < blocks ){
        var div = document.createElement('div');
        div.className = 'block';
        div.style.width = wide;
        div.style.height = high;
        div.style.float = 'left';
        div.style.border = '2px rgb(100, 100, 100) solid';
        div.style.margin = '-2px';
        div.addEventListener('mouseover', function () {
            this.style.backgroundColor = 'black';
        }
        );
        div.style.backgroundColor = 'grey';
        container[0].appendChild(div); 
        i++;
    }
    }
}

function Clear() {
    if (0 < blocks) {
        container[0].innerHTML = '';
        i = 0;
        console.log('cleared');
    }

}
function sizing() {
    size = prompt('Enter a number between 1 and 100');
    if (size > 100 || size < 1) {
        alert('Please enter a number between 1 and 100');
        sizing();
    }
    else {
        Clear();
        creategrid();
    }
}

function wipe() {
    divs = document.querySelectorAll('.block')
    divs.forEach(function (div) {
        div.style.backgroundColor = 'grey';
    }
    );
}
