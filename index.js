const items = [
  {
    class: "one",
    onClick: `setRandomStyles('.one')`,
    color: "green"
  },
  {
    class: "two",
    onClick: `setBGColor('.one')`,
    color: "red"
  },
  {
    class: "three",
    onClick: `setMarginAll()`,
    color: "blue"
  },
  {
    class: "four",
    onClick: `setColor('.foo')`,
    color: "gray"
  },
  {
    class: "five",
    onClick: `Animation('.five')`,
    color: "gold"
  },
  {
    class: "six",
    onClick: `rotateDiv('.six')`,
    color: "orange"
  },
  {
    class: "seven",
    onClick: `changeColorEverySecond()`,
    color: "orangered"
  },
  {
    class: "eight",
    onClick: `refreshWebPage()`,
    color: "darkgreen"
  },
  {
    class: "nine",
    onClick: `goToPage()`,
    color: "palegreen"
  },
]
const mainHtml = items.reduce(mkHtmlStr, '');

// Functionaliteit 1
function setBGColor(query) {
  let bgColor = document.querySelector(`${query}`);

  bgColor.style.transition = "2s";

  if (bgColor.style.background === 'red'){
    bgColor.style.background = "green";
  } else {
    bgColor.style.background = "red";
  }
}

// Functionaliteit 2
function setRandomStyles(query){
  let querySelector = document.querySelector(`${query}`);

  querySelector.style.transition = "10s";

  if (querySelector.style.opacity === "0"){
    querySelector.style.opacity = "1";
  } else {
    querySelector.style.opacity = "0";
  }

}

// Functionaliteit 4
function setMarginAll(){
  let querySelector = document.querySelectorAll('div');

  querySelector.forEach(div => {
    if (div.style.margin === "10px"){
      div.style.margin = "0"
    } else {
      div.style.margin = "10px"
    }
  });
}

// Functionaliteit 5
function Animation(query){
  let querySelector = document.querySelector(`${query}`);

  querySelector.style.animationName = "animationFunction5";
  querySelector.style.animationDuration = "4s";
}

// Functionaliteit 6
function rotateDiv(query){
  let querySelector = document.querySelector(`${query}`);

  if (querySelector.style.transform === "rotate(90deg)"){
    querySelector.style.transform = "rotate(0deg)";
  } else {
    querySelector.style.transform = "rotate(90deg)";
  }

}


// Functionaliteit 7
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(){
  let div = document.querySelector('.seven');
  div.style.backgroundColor= getRandomColor();
}

function changeColorEverySecond(){
  setInterval(changeColor,1000);
}


// Functionaliteit 8
function refreshWebPage(){
  window.location.reload();
}

// Functionaliteit 9
function goToPage(){
  let url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  window.open(url ,"_blank")
}


function mkHtmlStr(htmlStr, item) {
  const stringToAppend = `<div onclick="${item.onClick}"
                               class="${item.class}"
                               style="background:${item.color};">
                          </div>`;

  return htmlStr + stringToAppend;
}

document.querySelector('main').innerHTML = mainHtml;
