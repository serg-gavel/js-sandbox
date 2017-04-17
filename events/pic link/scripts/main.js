var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink() {
    var allImages = document.querySelectorAll("img");
    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);

    for (var i = 0; i < allImages.length; i++) {
        if (allImages[i] !== pic) {
            allImages[i].className = "hide";
        }
    }



    if (pic.className === "hide") {
        pic.className = "";
    } else {
        pic.className = "hide";
    }
}