document.addEventListener("DOMContentLoaded", function(event) {
    var x = document.getElementsByClassName("cmp-progressbar");
    var targetElements = document.getElementsByClassName("progressbar");
    var l = x.length;

    for (var i = 0; i < l; i++) {
        var percentage = x[i].firstElementChild.textContent;
        console.log(percentage);

        var element = document.createElement("div");
        element.setAttribute("class", "cmp-progressbar-completedPercentage");
        var text = document.createTextNode(percentage + "%");
        element.appendChild(text);


        targetElements[i].insertBefore(element, targetElements[i].firstChild);
    }
});