<?php 
if(isset($_POST["submit"])){
  
$firstName = $_REQUEST["fname"];
$lastName = $_REQUEST["lname"];
$email = $_REQUEST["email"];
$massage = $_REQUEST["massage"];

$name = $firstName." ".$lastName;
$mailTo = "sahedulislam2020@outlook.com";
$header = "Form: ".$email;
$text = "You have received an E-mail form: ".$name.".\n\n".$massage;
$subject = "Massage From Your Website.";

mail($mailTo,$subject,$text,$header);
header("Location:index.html");

}
?>