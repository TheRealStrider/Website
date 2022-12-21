let troll = document.getElementById("imagine");
troll.style.opacity = "0";
troll.style.transition = "1s";

function closeTroll() {
    troll.style.opacity = "0";
}

function myFunction() {
    troll.style.opacity = "100";
    window.setTimeout(closeTroll, 10000);
}
