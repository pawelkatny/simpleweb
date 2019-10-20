var content = document.getElementsByClassName("content-info");

function onClick(event) {
    var target = event.currentTarget;
    var siblingNext = event.currentTarget.nextElementSibling;
    var siblingPrev = event.currentTarget.previousElementSibling

    if (target.classList.contains("visible-logo")) {
        target.classList.replace("visible-logo", "hiden-logo");
        siblingNext.classList.replace("hiden-text", "visible-text");
    }
    
    if (target.classList.contains("visible-text")) {
        target.classList.replace("visible-text", "hiden-text");
        siblingPrev.classList.replace("hiden-logo", "visible-logo");
    };
}

for (var i = 0; i < content.length; i++) {
    content[i].firstElementChild.addEventListener('click', onClick, false);
    content[i].lastElementChild.addEventListener('click', onClick, false);
}



