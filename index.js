const items = [
    {
        class: "square one",
        onClick: 'squareBackground()',
        color: "red"
    },
    {
        class: "square two",
        onClick: 'roundSquare()',
        color: "green"
    },
    {
        class: "square three",
        onClick: 'onmouseover="largeSquare()" onmouseout="smallSquare()"',
        color: "blue"
    },
    {
        class: "square four",
        onClick: 'marginGrid()',
        color: "yellow"
    },
    {
        class: "square five",
        onClick: 'squareAnimation()',
        color: "orange"
    },
    {
        class: "square six",
        onClick: 'rotateSquare()',
        color: "purple"
    },
    {
        class: "square seven",
        onClick: 'changeColor()',
        color: "pink"
    },
    {
        class: "square eight",
        onClick: 'reloadPage()',
        color: "black"
    },
    {
        class: "square nine",
        onClick: 'openVideo()',
        color: "brown"
    },
]
const mainHtml = items.reduce(mkHtmlStr, '');

function mkHtmlStr(htmlStr, item, count) {
    count++;
    if (count == 3) {
        var html = `<div ${item.onClick}
                    class="${item.class}"
                    style="background:${item.color};">
                </div></div><div id="container">`;
    } else if(count == 6) {
        var html = `<div onclick="${item.onClick}"
                    class="${item.class}"
                    style="background:${item.color};">
                </div></div><div id="container">`;
    } else {
        var html = `<div onclick="${item.onClick}"
                    class="${item.class}"
                    style="background:${item.color};">
                </div>`;
    }
    const stringToAppend = html;
    return htmlStr + stringToAppend;
}

const beginHtml = '<div class="wrapper"><div class="grid"><div id="container">';
const endHtml = '</div></div></div>';
document.querySelector('body').innerHTML = beginHtml + mainHtml + endHtml;


// Styling
var body = document.querySelector('body');
body.style.setProperty("margin", "0", "important");
body.style.setProperty("padding", "0", "important");

var wrapper = document.querySelector('.wrapper');
wrapper.style.setProperty("height", "100vh", "important");
wrapper.style.setProperty("width", "100%", "important");
wrapper.style.display = "flex";
wrapper.style.justifyContent = "center";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center";

var container = document.querySelectorAll("#container");
container.forEach(div => {
    div.style.setProperty("height", "200px", "important");
    div.style.setProperty("width", "600px", "important");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.flexFlow = "row";
});

var squareGrid = document.querySelectorAll('.square');
squareGrid.forEach(div => {
    div.style.flex = "1 0 auto";
    div.style.height = "auto";
    div.style.transition = "1s ease-in-out";
});

// Square 1
function squareBackground() {
    let square = document.querySelector('.two');
    square.style.transition = "1s";
    if (square.style.background === 'green') {
        square.style.background = "purple";
    } else {
        square.style.background = "green";
    }
}

// Square 2
function roundSquare() {
    let square = document.querySelector('.one');
    square.style.transition = "2s";
    if (square.style.borderRadius === "50px") {
        square.style.borderRadius = "0px";
    } else {
        square.style.borderRadius = "50px";
    }
}

// Square 3
function largeSquare() {
    let square = document.querySelector('.three');
    square.style.transition = "1s ease-in-out"
    square.style.transform = "scale(1.5)";
}

function smallSquare() {
    let square = document.querySelector('.three');
    square.style.transition = "1s ease-in-out"
    square.style.transform = "scale(1.0)";
}

// Square 4
function marginGrid() {
    let square = document.querySelectorAll('.square');
    square.forEach(div => {
        if (div.style.margin === "10px") {
            div.style.margin = "0"
        } else {
            div.style.margin = "10px"
        }
    });
}

// Square 5
function squareAnimation() {
    let square = document.querySelector('.five');
    square.animate([
        { backgroundColor: 'orange' },
        { backgroundColor: 'brown' },
        { backgroundColor: 'orange' }
    ], {
        duration: 4000
    })
}

// Square 6
function rotateSquare() {
    let square = document.querySelector('.grid');
    square.style.transition = "1s all";
    if (square.style.transform === "rotate(90deg)") {
        square.style.transform = "rotate(0deg)";
    } else {
        square.style.transform = "rotate(90deg)";
    }
}

// Square 7
function getColor() {
    let colorRandom = "#" + Math.random().toString(16).slice(2, 8)
    let colorchange = document.querySelector('.seven');
    colorchange.style.transition = "0.5s ease";
    colorchange.style.backgroundColor = colorRandom;
}

function changeColor() {
    setInterval(getColor, 1000);
}

// Square 8
function reloadPage() {
    location.reload();
}

// Square 9
function openVideo() {
    window.open("https://www.youtube.com/watch?v=U06jlgpMtQs");
}