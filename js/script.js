function validateForm() {
    const name = document.forms["form"]["yourname"].value;
    const email = document.forms["form"]["email"].value; 
    const interest = document.forms["form"]["Interest"].value;

    if (name == "" || email == "" || interest == "") {
        document.getElementById("error").innerHTML = "Tidak Boleh ada yang kosong"
        return false;
}
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n)    {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length){ 
        slideIndex = 1;
    } else if (n < 1){
         slideIndex = imgList.length;
    }
    
    for (i = 0; i <imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    
    imgList[slideIndex - 1].style.display = "block";
}

setInterval(function() {
    plusDivs(1);
}, 1000)