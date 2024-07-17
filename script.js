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
var skill = document.getElementById("skills");
var project = document.getElementById("project");
var dark = document.getElementById("dark-mode");
function light_mode(){
    light.style.display = "none";
    skill.style.background = "linear-gradient(360deg,rgb(36, 141, 173),rgb(36, 141, 173))";
    skill.style.color = "black";
    body.style.background = "linear-gradient(75deg,rgb(36, 141, 173),rgb(36, 141, 173))";
    body.style.color = "black";
    project.style.background =  "linear-gradient(180deg,rgb(36, 141, 173),rgb(36, 141, 173))";
    project.style.color = "black";
    dark.style.display = "flex";
    
}
function dark_mode(){
    body.style.background = "";
    body.style.color = "white";
    project.style.background =  "";
    project.style.color = "white";
    skill.style.background = "";
    skill.style.color = "white";
    light.style.display = "flex";
    dark.style.display = "none";
}
document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formspree.io/f/mdoqpojd", {
        method: "POST",
        body: data,
    }).then(response => {
        if (response.ok){
            alert("Success!");
        }
        else{
            alert("Error!");
        }
    });
    document.getElementById("contact-form").reset();
})