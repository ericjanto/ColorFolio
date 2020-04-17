var videos = document.getElementsByTagName("video");

function checkScroll() {

    for(var i = 0; i < videos.length; i++) {
        var fraction = 0.8;
        var video = videos[i];

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                video.play();
            } else {
                video.pause();
            }
    }

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);


function changeText() {
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


    if (width > 600) {
        document.getElementById("contactinfo").innerHTML = "Email address copied.<br>Now send me pics of cute dogs!<br>🐶";
    } else {
        document.getElementById("contactinfo").innerHTML = "Email address copied, yeee! 🙌🏻";
    }
}

var clipboardDemos = new ClipboardJS('[data-clipboard-demo]');
clipboardDemos.on('success', function(e) {
    e.clearSelection();
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    showTooltip(e.trigger, 'Copied!');
});
clipboardDemos.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
    showTooltip(e.trigger, fallbackMessage(e.action));
});

function scrollFunction() {
    document.getElementById("terminal-link").scrollIntoView(true);
}

