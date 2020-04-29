function changeText() {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (width > 600) {
        document.getElementById("contactinfo").innerHTML = "Email address copied. Now send me pics of cute dogs! 🐶";
    } else {
        document.getElementById("contactinfo").innerHTML = "Email address copied, yeee! 🙌🏻";
    }
}

function scrollFunction() {
    document.getElementById("section-link").scrollIntoView(true);
}

function toggleVisibility1() {
    var article = document.getElementById("proj1-details");

    if (article.style.display === "none") {
        article.style.display = "block";
        document.getElementById("section-link").scrollIntoView(true);
        document.body.style.overflowY = "hidden";
    } else {
        article.style.display = "none";
        document.body.style.overflowY = "scroll";
    }
}