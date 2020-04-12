const options = 
[
  {
    class: "every", 
    background: "#880E4F", 
    event: "transition_another_background"
  },
  {
    class: "element", 
    background: "#33691E", 
    event: "change_another_border"
  },
  {
    class: "must", 
    background: "#512DA8", 
    event: "none"
  },
  {
    class: "have", 
    background: "#4E342E", 
    event: "add_spacing"
  },
  {
    class: "a", 
    background: "#F57F17", 
    event: "animate_another_rotation"
  },
  {
    class: "totally", 
    background: "#004D40", 
    event: "transition_tilt_all"
  },
  {
    class: "different", 
    background: "#0D47A1", 
    event: "interval_change_background"
  },
  {
    class: "css", 
    background: "#37474F", 
    event: "reload"
  },
  {
    class: "class", 
    background: "#b71c1c", 
    event: "youtube"
  },
];
const main = document.querySelector("main");
const blocks = [];
let interval = false;

options.forEach(option=>
{
  let element = document.createElement("div");
  element.className = option.class;
  element.style.setProperty("--background", option.background);
  element.addEventListener("click", ()=>{
    handle(element, option.event);
  });
  main.appendChild(element);
  blocks.push(element);
});

function handle(element, event) 
{
  switch(event) 
  {
    case "transition_another_background":
      var r = Math.round(Math.random()*(blocks.length-1));
      blocks[r].toggleAttribute("change_background");
      blocks[r].style.setProperty("--changed-background", "hsl("+Math.round(Math.random()*360)+"deg, 100%, 50%)");
    break;
    case "change_another_border":
      var r = Math.round(Math.random()*(blocks.length-1));
      blocks[r].toggleAttribute("add_border");
    break;
    case "add_spacing":
      main.toggleAttribute("add_spacing");
    break;
    case "animate_another_rotation":
      var r;
      do 
      {
        r = Math.round(Math.random()*(blocks.length-1));
      } while (blocks[r].hasAttribute("animate_rotation"));
      blocks[r].setAttribute("animate_rotation", "");
      setTimeout(()=>{
        blocks[r].removeAttribute("animate_rotation");
      }, 1000);
    break;
    case "transition_tilt_all":
      main.toggleAttribute("tilt_all");
    break;
    case "interval_change_background":
      if(interval === false) {
        element.setAttribute("interval", "");
        element.style.setProperty("--interval-background", "hsl("+Math.round(Math.random()*360)+"deg, 100%, 50%)");
        interval = setInterval(()=>{
          element.style.setProperty("--interval-background", "hsl("+Math.round(Math.random()*360)+"deg, 100%, 50%)");
        }, 1000);
      }else {
        element.removeAttribute("interval");
        clearInterval(interval);
        interval = false;
      }
    break;
    case "reload":
      location.reload();
    break;
    case "youtube":
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    break;
  }
}
        