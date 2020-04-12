const items = [
    {
        class: "one",
        onClick: `colorSwap()`,
        name: 'Kleur veranderen',
        color: "green"
    },
    {
        class: "two",
        onClick: `setStyle()`,
        name: 'Style veranderen',
        color: "black"
    },
    {
        class: "three",
        onClick: 'SetHover()',
        name: 'Hoveren',
        color: "grey"
    },
    {
        class: "four",
        onClick: 'SetSpace()',
        name: 'Ruimte creeren',
        color: "lime"
    },
    {
        class: "five",
        onClick: `SetAnimation()`,
        name: 'Animatie uitvoeren',
        color: "blue"
    },
    {
        class: "six",
        onClick: 'SetRotation()',
        name: 'Draaien',
        color: "pink"
    },
    {
        class: "seven",
        onClick: 'SetTimedColor()',
        name: 'Kleur om de tijd',
        color: "green"
    },
    {
        class: "eight",
        onClick: 'RefreshPage()',
        name: 'Pagina refresh',
        color: "red"
    },
    {
        class: "nine",
        onClick: 'GoToLink()',
        name: 'Ga naar link',
        color: "orange"
    },
]
const mainHtml = items.reduce(mkHtmlStr, '');

function colorSwap() {
    document.querySelector('.three').style = "transition: all 2000ms ease; transition-property: background; background: green;";
}

function setStyle() {
    document.querySelector('.one').style = "transition: all 2000ms ease; transition-property: background; width; background: green ;width: 330px; height: 300px; border-radius: 250px;";
}

function SetSpace() {
    var div = document.querySelector('main').childNodes;
    for(var i=0; i<div.length; i++) {
        if (div[i].nodeName.toLowerCase() == 'div') {
            background = div[i].style.background;
            div[i].style = "margin: 15px; background:" + background + ";";
        }
    }
}

function SetAnimation() {
    document.querySelector('.five').style = "transition: all 2000ms ease; transition-property: background, width; background: black; width: 330px; height: 300px; border-radius: 250px;";
}

function SetRotation() {
    var SetRotation = document.querySelector("main").style.transform;
    if(SetRotation !== 'rotate(90deg)') {
        document.querySelector('main').style = "transform: rotate(90deg); transition: transform 300ms ease;";
    } else {
        document.querySelector('main').style = "transform: rotate(0deg); transition: transform 300ms ease";
    }
}


function changeColor() {
    let randomColor = "#" + Math.random().toString(16).slice(2, 8)
    let changeColor = document.querySelector('.seven');
    changeColor.style.transition = "0.5s ease";
    changeColor.style.backgroundColor = randomColor;
}

function SetTimedColor() {
    setInterval(changeColor, 1600);
}


function RefreshPage() {
    location.reload();
}

function GoToLink() {
    document.location = 'https://www.youtube.com/watch?v=RbMKEVpIHj8';
}

function mkHtmlStr (htmlStr, item) {
    const stringToAppend = `<div onclick="${item.onClick}"
                                 class="${item.class}"
                                 style="background:${item.color};">
                                 <p>"${item.name}"</p>
                            </div>`;
  
    return htmlStr + stringToAppend;
  }
  
  document.querySelector('main').innerHTML = mainHtml;



