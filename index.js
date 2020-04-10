//
// Opdracht voor frontend fundamentals
// Gemaakt door Tim de Gier
// Datum 7-4-2020
// Enjoy!
// Comments in het engels
//
//

var blocks = [
    {block:1, class:'block1', color:'green'}, {block:2, class:'block2', color:'red'}, {block:3, class:'block3', color:'blue'},
    {block:4, class:'block4', color:'black'}, {block:5, class:'block5', color:'orange'}, {block:6, class:'block6', color:'purple'},
    {block:7, class:'block7', color:'yellow'}, {block:8, class:'block8', color:'green'}, {block:9, class:'block9', color:'grey'},
]
var rotation = 0;

//draw the blocks
function drawBlocks(blocks,rotation){
    var count = 0;
    document.write('<div class="box">');
    for (var i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log('Loaded block: ' + blocks[count].block);
            
            document.write('<div style="width:100px;height:100px;margin:5px;background-color:'+blocks[count].color+';display:inline-block;transition:0.5s;" class="blocks '+blocks[count].class+'" id="'+blocks[count].block+'" onclick="execute('+blocks[count].block+',rotation)"></div>');
            count++;
        }

        document.write('<br>');
    }
    document.write('</div>');
}

//set random div color
function randomDivColor(owner){
    var colorCode = Math.floor(Math.random() * Math.floor(255)) + ',' + Math.floor(Math.random() * Math.floor(255)) + ',' + Math.floor(Math.random() * Math.floor(255));
    var randomID = Math.floor(Math.random() * 9) + 1;
    console.log('Color: ' + colorCode + ' on block: ' + randomID);

    if(randomID !== owner || randomID !== 0){
        document.getElementById(randomID).style.backgroundColor = 'rgb('+colorCode+')!important';
    } else {
        document.getElementById(owner+1).style.backgroundColor = 'rgb('+colorCode+')!important';
    }
}

//set margin of 10px
function setMargin(){
    var index = document.querySelectorAll('.blocks');
    console.log('Got margins on all blocks');

    for (i = 0; i < index.length; i++){
        index[i].style.margin = "10px";
    }
}

//set animation on random div
function animation(){
    var randomID = Math.floor(Math.random() * 9) + 1;
    document.getElementById(randomID).style.animation = 'animation 3s 1';
    console.log('Added animation on block: ' + randomID);
}

//reload the web page
function reloadWebpage() {
    window.location.reload();
}

//open youtube
function openYoutube(){
    window.open('https://youtube.com');
    console.log('Opened youtube');
}

//colorchanger
function secondsColors(owner){
    setInterval(function(){
        var colorCode = Math.floor(Math.random() * Math.floor(255)) + ',' + Math.floor(Math.random() * Math.floor(255)) + ',' + Math.floor(Math.random() * Math.floor(255));
        document.getElementById(owner).style.backgroundColor = 'rgb('+colorCode+')';
    },1000);
    console.log('Added an auto color changer on block: ' + owner);
}

//rotate the box 90 deg
function rotateBox(rotation){
    rotation += 90;
    document.querySelector('.box').style.transform = 'rotate('+rotation+'deg)';
    console.log('Rotated the entire box 90 degrees, current angle is: ' + rotation + 'degrees');
}

//execute
function execute(owner,rotation){
    var functionNum = Math.floor(Math.random() * 7) + 1;
    switch (functionNum) {
        case 1:
            randomDivColor(owner);
            break;
        case 2:
            setMargin();
            break;
        case 3:
            animation();
            break;
        case 4:
            secondsColors(owner);
            break;
        case 5:
            openYoutube();
            break;
        case 6:
            reloadWebpage();
            break;
        case 7:
            rotateBox(rotation);
            break;
        default:
            break;
    }
}

//draw the whole package
drawBlocks(blocks,rotation);