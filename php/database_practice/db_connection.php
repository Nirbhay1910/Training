<?php 
  $servername = "localhost";
  $username = "root";
  $password = "password";
  $dbname = "practice";
  $conn = new mysqli($servername,$username,$password,$dbname);
  if($conn->connect_error){
    echo "connection fails";
  }else{
    echo "connection established";
  }
?>

