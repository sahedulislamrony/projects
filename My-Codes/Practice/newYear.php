<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="theme-color" content="#a3acae"/>
 <meta name="keywords" content="Sahedul Islam , Sahed , Freelancersahed , Sahed Physics Mathematics Web Developers">
 <meta name="description" content="Happy New Year . Click to see my massage for you. ">
  <title>Happy New Year.</title>
  
  
  <!-- HTML -->
  <!-- Custom Styles -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Galada&display=swap" type="text/css" />
  <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
  <style type="text/css" media="all">
    :root{
  --ff:'Galada', Times New Roman;
}


*{
  margin:0;
  padding:0;
}
html{
  scroll-behavior:smooth;
}
body{
  position:relative;
}
.main{
  font-family:'Galada',Times New Roman;
  color:#bbbdbe;
  width:100vw;
  height:100vh;
  transition:2s;
  display:none;
  position:absolute;
}

.textW  span:nth-child(2n+1){
  color:#fac040;
}
.textW p:nth-child(2){
  font-size:20px;
  text-align:center;
}
.textW span:nth-child(2){
  color:#c9c9c9;
}
.text p:nth-child(3){
  font-size:30px;
  text-align:center;
  margin-top:20px;
}

#year{
  color:#ff6600;
  font-size:50px;
  padding-left:8px;
}
.textW p:nth-child(5){
  color:#cf4000;
  font-size:22px;
}
.textW p:last-child{
  color:#ffb650;
  font-size:20px;
}
.text{
  width:100vw;
  height:500px;
  padding:25px;
  display:flex;
  justify-content: center;
  align-items:center;
}
.fas{
  font-size:100px;
  color:#ff3f00;
}
.far{
  font-size:20px;
  color:#ff7a00;
}
.intro{
  width:100vw;
  height:100vh;
  text-align:center;
  transition:2s;
  position: absolute;
 }
.intro h3{
  font-family:var(--ff);
  font-size:30px;
  color:#ff7a00;
  margin-top:50px;
}
.intro .fas{
  text-align:center;
  font-size:100px;
  color:#ff4c00;
  margin-top:20px;
}
.intro p{
  text-align:center ;
  margin-top:15px;
  font-family:var(--ff);
  font-size:30px;
  color:#ff3b00;
}
.wrapper{
  width:100%;
  padding-top:40px;
  margin:auto;
  position:relative;
  
}
.wrapper .dd{
  position:absolute;
  width:200px;
  height:200px;
  left:25%;
  border-radius:5px;
}
.wrapper div:last-child{
  border:3px solid #cf5600;
  transform:rotate(45deg);
}
.wrapper div:first-child{
  border:3px solid #f7cd01;
}
.dd{
  text-align:center;
  font-family:var(--ff);
  padding-top:23%;
  font-size:30px;
}
  </style>
  <script src="https://kit.fontawesome.com/6c282a4e73.js" crossorigin="anonymous"></script>
  
</head>

<body>
  <div style="animation-duration:2s" class="intro animate__animated">
    <center><i class="fas fa-heart"></i></center>
    <p>It's 2020</p>
     <h3>
       Dear <font style="color:#ca5404">  <?php 
            
           $name = $_REQUEST['for'];
         echo $name;
       
       ?> 
       </font>
     This  Is  For You.
     </h3>
     
     <div class="wrapper">
  
    <div class="dd">
      Click
    </div>
    <div class="dd">

    </div>
    </div>
    
    
    
  </div>
  
  <div class="main animate__animated animate__zoomIn"style="animation-delay:2s" id="main">
    
    <div class="text">
      
    <div class="textW">
      <center>
 <span>
 <i class="fas fa-heart"></i>
 </span>
 </center>
   <p>Welcome To <span id="year">2021</span></p>
    <p>
    <span>Happy</span>
    <span>New</span>
    <span>Year</span>
    </p>
    
    <p>Hopefully you're well by the grace of Almighty and spent your previous year fairly in this Covid-19 pandemic. I pray to Allah that this year will bring good and happy message for you. Always be my friend. Pray for me.
    
    </p>
    
      <p>
        With Love ...
      </p>
      <p>
        Sahedul Islam Rony <i class="far fa-heart"></i>
      </p>
      </div>
      </div>
  </div>
  
  
  
  <!----- Required JAVASCRIPT ------>
  <script type="text/JavaScript">
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
});
const width = window.innerWidth;
if(width>600){
  const text = "This page is specifically designed for mobile browser due to shortage of time . Please use mobile mode to see this page :( .";
  alert(text);
  document.querySelector("body div").style.display="none";
}else{
  
}
  </script>
  
  
  </body>
  </html>