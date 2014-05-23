/*
Clint Bellanger 2014
http://clintbellanger.net
Public Domain (CC0)

Slowly spins a web site
*/

var spin = new Object();

spin.degrees = 0.01;
spin.acceleration = 1.01;
spin.delayms = 100;

spin.sleep = function(mills, callback) {
  setTimeout(function()
    {callback();}
  , mills);
}

spin.update = function() {
  document.body.style.transform = "rotate(" + spin.degrees + "deg)";
  document.body.style.webkitTransform = "rotate(" + spin.degrees + "deg)";
  spin.degrees *= spin.acceleration;
  spin.sleep(spin.delayms, spin.update);
}

spin.update();
