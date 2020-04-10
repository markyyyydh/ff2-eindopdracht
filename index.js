const items = [
  {
    class: "one",
    onClick: `setRandomStyles('.one')`,
    color: "blue"
  },
  {
    class: "two",
    onClick: `setBGColor('.one')`,
    color: "yellow"
  },
  {
    class: "three",
    onClick: `setMarginAll()`,
    color: "red"
  },
  {
    class: "four",
    onClick: `goToPage()`,
    color: "darkgreen"
  },
  {
    class: "five",
    onClick: `rotateDiv('.five')`,
    color: "orange"
  },
  {
    class: "six",
    onClick: `Animation('.six')`,
    color: "darkred"
  },
  {
    class: "seven",
    onClick: `setColor('.foo')`,
    color: "lightgreen"
  },
  {
    class: "eight",
    onClick: `refreshPage()`,
    color: "purple"
  },
  {
    class: "nine",
    onClick: `changeColorEverySecond()`,
    color: "lightblue"
  },
]
const mainHtml = items.reduce(mkHtmlStr, '');


function setRandomStyles(query) {
  let querySelector = document.querySelector(`${query}`);

  querySelector.style.transition = "10s";

  if (querySelector.style.opacity === "0") {
    querySelector.style.opacity = "1";
  } else {
    querySelector.style.opacity = "0";
  }

}


function setMarginAll() {
  let querySelector = document.querySelectorAll('div');

  querySelector.forEach(div => {
    if (div.style.margin === "10px") {
      div.style.margin = "0"
    } else {
      div.style.margin = "10px"
    }
  });
}


function setBGColor(query) {
  let bgColor = document.querySelector(`${query}`);

  bgColor.style.transition = "2s";

  if (bgColor.style.background === 'red') {
    bgColor.style.background = "green";
  } else {
    bgColor.style.background = "red";
  }
}

function goToPage() {
  let url = "https://www.youtube.com/watch?v=eEhcCwF1nns";
  window.open(url, "_blank")
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  let div = document.querySelector('.nine');
  div.style.backgroundColor = getRandomColor();
}

function refreshPage() {
  window.location.reload();
}

function changeColorEverySecond() {
  setInterval(changeColor, 1000);
}

function Animation(query) {
  let querySelector = document.querySelector(`${query}`);

  querySelector.style.animationName = "animationFunction5";
  querySelector.style.animationDuration = "4s";
}


function rotateDiv(query) {
  let querySelector = document.querySelector(`${query}`);

  if (querySelector.style.transform === "rotate(90deg)") {
    querySelector.style.transform = "rotate(0deg)";
  } else {
    querySelector.style.transform = "rotate(90deg)";
  }

}

function mkHtmlStr(htmlStr, item) {
  const stringToAppend = `<div onclick="${item.onClick}"
                               class="${item.class}"
                               style="background:${item.color};">
                          </div>`;

  return htmlStr + stringToAppend;
}

document.querySelector('main').innerHTML = mainHtml;