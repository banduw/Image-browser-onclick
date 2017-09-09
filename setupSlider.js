function setupSlider(container){
    function goLeft(ev) {
        var container = ev.currentTarget.parentNode;
        var current = Number(container.getAttribute("current"));
        current--;
        container.setAttribute("current", current);
        container.querySelector(".image-list").style.left = (current * (-220)) + "px";
        container.classList.remove("last");
        if (current === 0){
            container.classList.add("first");
        }
    }
    function goRight(ev) {
        var container = ev.currentTarget.parentNode;
        var current = Number(container.getAttribute("current"));
        var count = Number(container.getAttribute("count"));
        current++;
        container.setAttribute("current", current);
        container.querySelector(".image-list").style.left = (current * (-220)) + "px";
        container.classList.remove("first");
        if (current === (count - 1)){
            container.classList.add("last");
        }
    }

    // add next button
    var next = document.createElement("img");
    next.src = "next-button.svg";
    next.classList.add("go-button", "go-right");
    next.addEventListener("click", goRight);
    container.appendChild(next);

    // add prev button
    var prev = document.createElement("img");
    prev.src = "prev-button.svg";
    prev.classList.add("go-button", "go-left");
    prev.addEventListener("click", goLeft);
    container.appendChild(prev);

    var images = container.querySelectorAll(".image-list img");
    container.setAttribute("count", images.length);
    container.setAttribute("current", 0);
    container.classList.add("first");
    if (images.length <= 1) {
        container.classList.add("last");
    }
}
