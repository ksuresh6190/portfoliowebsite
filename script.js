var icon = document.getElementById("about-tag")
var btn = document.getElementById("button")
var closebtn = document.getElementById("close-btn")
function menutag(){
    icon.style.display = "flex";
    btn.style.display = "none";
    closebtn.style.display = "flex";
}
function closetag(){
    icon.style.display = "none"
    btn.style.display = "flex";
    closebtn.style.display = "none";
}
var light = document.getElementById("light-mode");
var body = document.getElementById("body");
var dark = document.getElementById("dark-mode");
function light_mode(){
    light.style.display = "none";
    body.style.backgroundColor = "";
    body.style.color = "";
    dark.style.display = "flex";
    
}
function dark_mode(){
    body.style.backgroundColor = "#494949";
    body.style.color = "white";
    light.style.display = "flex";
    dark.style.display = "none";
}