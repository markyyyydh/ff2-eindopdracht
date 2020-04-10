function itemToHtml(item) {
  return  `<div onclick="${item.onClick}"
            class="${item.class}"
            style="background-color:${item.color};"
          >
          </div>`;
}

function itemsToHtml(htmlStr, item) {
  return htmlStr + itemToHtml(item);
}

const items = [
  {
    class: "",
    onClick: "toggleColor(this)",
    color: "tomato"
  },
  {
    class: "",
    onClick: "randomToggle(this, 'styleChange')",
    color: "crimson"
  },
  {
    class: "",
    onClick: `globalToggle('addSpace')`,
    color: "red"
  },
  {
    class: "hoverable",
    onClick: ``,
    color: "royalblue"
  },
  {
    class: "",
    onClick: `playAnimation()`,
    color: "cornflowerblue"
  },
  {
    class: "",
    onClick: `globalToggle('capsize')`,
    color: "dodgerblue"
  },
  {
    class: "",
    onClick: `changeColor(this)`,
    color: "springgreen"
  },
  {
    class: "",
    onClick: `location.reload()`,
    color: "green"
  },
  {
    class: "",
    onClick: `window.open('https://www.youtube.com')`,
    color: "palegreen"
  }
]
const mainHtml = items.reduce(itemsToHtml, '');

/**
 * Returns an random item element.
 * 
 * @param not excluded id.
 */
function getRandomItem(not) {
  let itemId;
  do {
    itemId = Math.floor(Math.random() * items.length);
  } while(itemId == not);
  return document.querySelector('main').childNodes[itemId];
}

/**
 * Returns the id of an item.
 * 
 * @param item element.
 */
function getIdFromElement(item) {
  var i = 0;
  while((item = item.previousSibling) != null) {
    i++;
  }
  return i;
}

/**
 * Sets the background color of an random item.
 * 
 * @param source this item will be excluded.
 */
function toggleColor(source) {
  let item = document.querySelector(`.colorChanged`); // I also want it to change back when pressed again.
  if(item !== null) {
    let itemId = getIdFromElement(item);
    item.classList.remove('colorChanged');
    item.style = "background-color: " + items[itemId].color;
    return;
  }

  item = getRandomItem(getIdFromElement(source));
  item.classList.add('colorChanged');
  item.style = "background-color: #402567";
}

/**
 * Adds a class to a random item. If an item with that class already exists, it will remove the class.
 * 
 * @param source this item will be excluded.
 * @param className class to toggle.
 */
function randomToggle(source, className) {
  let item = document.querySelector('.' + className); // I also want it to change back when pressed again.
  if(item !== null) {
    item.classList.remove(className);
    return;
  }

  item = getRandomItem(getIdFromElement(source));
  item.classList.add(className);
}

/**
 * Toggles the class of the container.
 * 
 * @param className class to toggle.
 */
function globalToggle(className) {
  document.querySelector('main').classList.toggle(className);
}

/**
 * Moves a random item.
 */
function playAnimation() {
  let item = document.querySelector('.animate');
  if(item !== null) {
    return;
  }
  item = getRandomItem(-1);
  item.classList.add('animate');
  setTimeout(function() {
    item.classList.remove('animate');
  }, 4000);
}

/**
 * Changes the color of an item every second.
 * 
 * @param source target item.
 */
function changeColor(source) {
  if(source.classList.contains('active')) {
    source.classList.remove('active');
    return;
  }

  source.classList.add('active');
  let interval = setInterval(function() {
    if(!source.classList.contains('active')) {
      clearInterval(interval);
    }
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    source.style = 'background-color: rgb(' + r + ',' + g + ',' + b + ')';
  }, 1000);
}

document.querySelector('main').innerHTML = mainHtml;
