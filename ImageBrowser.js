function ImageBrowser(container){
    function goLeft(ev) {
        current--;
        imageList.style.left = (current * (-220)) + "px";
        container.classList.remove("last");
        if (current === 0){
            container.classList.add("first");
        }
    }
    function goRight(ev) {
        var container = ev.currentTarget.parentNode;
        current++;
        imageList.style.left = (current * (-220)) + "px";
        container.classList.remove("first");
        if (current === (count - 1)){
            container.classList.add("last");
        }
    }
    function clear(){
        next.removeEventLitener("click", goRight);
        prev.removeEventLitener("click", goLeft);
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

    var imageList = container.querySelector(".image-list");
    var images = imageList.querySelectorAll("img");
    var count = images.length;
    var current = 0;
    container.classList.add("first");
    if (images.length <= 1) {
        container.classList.add("last");
    }
}
