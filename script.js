document.getElementsByClassName("btn")[0].onclick = () => {
    if (location.hash === "#bottom") {
        location.hash = "";
        setTimeout(() => {
            location.hash = "bottom";
        }, 10);
    } else {
        location.hash = "bottom";
    }
};

let dc = document.querySelector("#bottom > div.top-section > div.contact > p:nth-child(4)");