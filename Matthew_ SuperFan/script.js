var a = document.getElementById("game1") 
var b = document.getElementById("game2") 
var c = document.getElementById("game3") 
var d = document.getElementById("game4")
var e = document.getElementById("game5") 
var f = document.getElementById("game6") 
var g = document.getElementById("game7") 
var h = document.getElementById("game8") 
var i = document.getElementById("game9") 
var j = document.getElementById("character") 
var k = document.getElementById("Link-sound") 
var l = document.getElementById("Scorpion-sound")

function resetAll(elem){ 
   window.location.reload();
}

function disappear(elem){ 
    a.src = "images/Mask.gif"; 
    j.src = "images/Link.png";
} 
 
 function noise(elem){
	if (j.src = "images/Link.png")
	       k.play() 
 } 



function disappear2(elem){ 
    b.src = "images/Orange_fury.gif";
    j.src = "images/CB.png"; 
} 

function disappear3(elem){ 
    c.src = "images/64.gif";
    j.src = "images/Fat_Man.png"; 
} 
  
function disappear4(elem){ 
    d.src = "images/Fighter.gif";
    j.src = "images/Ryu.png"; 
} 
  
function disappear5(elem){ 
    e.src = "images/Pink.gif";
    j.src = "images/Kirb.png"; 
} 
  
function disappear6(elem){ 
    f.src = "images/Blue.gif"
    j.src = "images/Sonic.png"; 
} 
  
function disappear7(elem){ 
    g.src = "images/Battlefront_2.gif";
    j.src = "images/Clone.png"; 
} 

function disappear8(elem){ 
    h.src = "images/Trilogy.gif";
    j.src = "images/Scorpion.png"; 
} 
  
 function disappear9(elem){ 
    i.src = "images/Staff_Destruction.gif";
    j.src = "images/Cole.png"; 
} 
  
 
 
 