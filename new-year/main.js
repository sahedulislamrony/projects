 document.addEventListener("contextmenu", function (Sahed){
  Sahed.preventDefault();
});

var select = document.querySelector(".wrapper");
var select2 = document.querySelector(".main");
var select3 = document.querySelector(".intro");
select.addEventListener("click", function (){
    select2.style.display='block';
    //select3.style.display='none';
    select3.classList.add("animate__zoomOut")
    setTimeout(function() {
    select2.style.display='none';
    //select3.style.display='none';
    select3.classList.remove("animate__zoomOut")
    select3.classList.add("animate__zoomIn")
    }, 10000);
});
