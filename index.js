const items = [
  {
    class: "foo",
    onClick: 'greeting()',
    color: "green"
  },
  {
    class: "bar",
    onClick: `setColor('.foo')`,
    color: "red"
  }
]
const mainHtml = items.reduce(mkHtmlStr, '');

function setColor (query) {
  document.querySelector(`${query}`).classList.toggle('color');
}

function greeting () {
  alert('Hello!');
}

function mkHtmlStr (htmlStr, item) {
  const stringToAppend = `<div onclick="${item.onClick}"
                               class="${item.class}"
                               style="background:${item.color};">
                          </div>`;

  return htmlStr + stringToAppend;
}

document.querySelector('main').innerHTML = mainHtml;
