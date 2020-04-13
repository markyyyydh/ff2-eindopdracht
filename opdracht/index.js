const items = [
  {
    class: "one",
    onClick: "changeColor()",
    color: "green"
  },
  {//later opnieuw naar kijken
    class: "two",
    onClick: "changeOpacity()",
    color: "red"
  },
  {//later opnieuw naar hover kijken
    class: "three",
    onClick: "changeMargin()",
    color: "orange"
  },
  {
    class: "four",
    onClick: "",
    color: "blue"
  },
  {
    class: "five",
    onClick: "animation()",
    color: "grey"
  },
  {
    class: "six",
    onClick: "rotateBlock()",
    color: "black"
  },
  {
    class: "seven",
    onClick: "randomColors()",
    color: "pink"
  },
  {
    class: "eight",
    onClick: "location.reload()",
    color: "yellow"
  },
  {
    //link
    class: "nine",
    onClick: "window.open('https://www.youtube.com')",
    color: "brown"
  }
]

const mainHtml = items.reduce(mkHtmlStr, '');

//changecolor klik 1 verrander 2 
function changeColor () {
  document.querySelector('.two').style = "transition: 500ms; transition-property: background; background: black;";
}
//opacity klik 2 verrander 1
function changeOpacity () {
  document.querySelector('.one').style = "transition: 5000ms; transition-property:  opacity; opacity: 0.0;";
}

//klik op 3 en dan verrandert overal de margin
function changeMargin () {
  document.querySelector('.one').classList.toggle('margin');
  document.querySelector('.two').classList.toggle('margin');
  document.querySelector('.three').classList.toggle('margin');
  document.querySelector('.four').classList.toggle('margin');
  document.querySelector('.five').classList.toggle('margin');
  document.querySelector('.six').classList.toggle('margin');
  document.querySelector('.seven').classList.toggle('margin');
  document.querySelector('.eight').classList.toggle('margin');
  document.querySelector('.nine').classList.toggle('margin');
}



function animation() {
 
  document.querySelector(".six").style.animation = "color 2s 1";

  setTimeout(() => {
    document.querySelector(".six").style.animation = "";
  }, 2000);

}

function rotateBlock() {
  document.querySelector("main").style.transform = "rotate(90deg)";
}


function randomColors() {
  setInterval(() => {
    var red = Math.floor(Math.random() * Math.floor(255));
    var green = Math.floor(Math.random() * Math.floor(255));
    var blue = Math.floor(Math.random() * Math.floor(255));

    document.querySelector('.nine').style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
  }, 1000);  
}


function mkHtmlStr (htmlStr, item) {
  const stringToAppend = `<div onclick="${item.onClick}"
                               class="${item.class}"
                               style="background:${item.color};">
                          </div>`;

  return htmlStr + stringToAppend;
}

document.querySelector('main').innerHTML = mainHtml;
