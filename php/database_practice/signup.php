<?php 
session_start();
include("db_connection.php");
if($_SERVER["REQUEST_METHOD"]=="POST"){
  $usermail = $_POST["usermail"];
  $password = $_POST["password"];
  $cpassword = $_POST["cpassword"];
  $username = $_POST["username"];
  if($password==$cpassword){
    $sql = "SELECT * from $dbname.users where user_email='$usermail'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
      throw new Error("User already defined");
    }
    $hashed_password = password_hash($password,PASSWORD_DEFAULT);
    $sql = "INSERT INTO $dbname.users (user_name, user_email, user_password) VALUES ('$username', '$usermail','$hashed_password')";
    if($conn->query($sql)==true){
      $_SESSION["isLoggedIn"] = true;
      $_SESSION["username"] = $username;
      header("location:/database_practice/index.php");
    }else{
      throw new Error("Some Error with DB");
    }
  }
}
?>