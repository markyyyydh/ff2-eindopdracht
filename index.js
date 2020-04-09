const items = [
    {
        class: "foo",
        onClick: 'goToLink()',
        color: "green"
    },
    {
        class: "bar",
        onClick: `setColor('.ik')`,
        color: "black"
    },
    {
        class: "john",
        onClick: `colorSwap()`,
        color: "grey"
    },
    {
          class: "do",
          onClick: 'getFat()',
          color: "lime"
    },
    {
          class: "ik",
          onClick: `anderHalveMeterAfstand()`,
          color: "blue"
    },
    {
          class: "kan",
          onClick: 'byebye()',
          color: "pink"
    },
    {
          class: "geen",
          onClick: 'rotate()',
          color: "green"
    },
    {
          class: "naam",
          onClick: 'randomColor()',
          color: "red"
    },
    {
          class: "verzinen",
          onClick: 'refresh()',
          color: "orange"
    },
]
const mainHtml = items.reduce(mkHtmlStr, '');

function setColor (query) {
    document.querySelector(`${query}`).classList.toggle('color');
}

function colorSwap () {
    console.log('wou wee ree i am a working function');
    document.querySelector('.verzinen').style = "transition: background-color 0.5s ease; background-color: purple;";
}

function getFat() {
    document.querySelector('.kan').style = "transition: all 1200ms ease; transition-property: background, width; background: pink; width: 600px;";
}

function byebye() {
    background = document.querySelector('.verzinen').style.background;
    document.querySelector('.verzinen').style = "-webkit-animation: byebye 6s; background:" + background + ";";
}

function rotate() {
    var rotate = document.querySelector("main").style.transform;
    if(rotate !== 'rotate(90deg)') {
        document.querySelector('main').style = "transform: rotate( 90deg ); transition: transform 300ms ease;";
    } else {
        document.querySelector('main').style = "transform: rotate( 0deg ); transition: transform 300ms ease;";
    }
    //console.log(document.querySelector("main").style.transform);
}

function anderHalveMeterAfstand() {
    var divs = document.querySelector('main').childNodes;
    for(var i=0; i<divs.length; i++) {
        if (divs[i].nodeName.toLowerCase() == 'div') {
            background = divs[i].style.background;
            divs[i].style = "margin: 15px; background:" + background + ";";
        }
    }
}

function randomColor() {
    window.setInterval(function(){
      var number = Math.floor(Math.random() * 10);
      var error = false;
      switch (number) {
          case 0: background = "black"; break;
          case 1: background = "red"; break;
          case 2: background = "lime"; break;
          case 3: background = "green"; break;
          case 4: background = "grey"; break;
          case 5: background = "orange"; break;
          case 6: background = "yellow"; break;
          case 7: background = "pink"; break;
          case 8: background = "purple"; break;
          case 9: background = "blue"; break;
          default: error = true;
      }
      if(error == false) {
          document.querySelector('.naam').style = "transition: background-color 0.5s ease; background-color:" + background + ";";
      } else {
          console.log('no number');
      }
    }, 1000);
}

function refresh() {
    location.reload();
}

function goToLink() {
    document.location = 'https://www.youtube.com/?gl=NL&hl=nl';
}

function mkHtmlStr (htmlStr, item) {
  const stringToAppend = `<div onclick="${item.onClick}"
                               class="${item.class}"
                               style="background:${item.color};">
                               <p>"${item.onClick};"</p>
                          </div>`;

  return htmlStr + stringToAppend;
}

document.querySelector('main').innerHTML = mainHtml;
