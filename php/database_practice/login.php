<?php
  session_start();
  include("db_connection.php");
  if($_SERVER["REQUEST_METHOD"]=="POST"){
    $usermail = $_POST["usermail"];
    $password = $_POST["password"];
    if($username && $password){
      $sql = "SELECT user_name, user_email,user_password from $dbname.users WHERE user_email='$usermail'";
      $result = $conn->query($sql);
      if($result->num_rows == 1){
        while($row = $result->fetch_assoc()){
          if(password_verify($password,$row["user_password"])){
            $_SESSION["isLoggedIn"] = true;
            $_SESSION["username"] = $row["user_name"];
          }
        }
        header("location:/database_practice/index.php");
      }else{
        echo "<h4>Invalid Creds</h4>";
      }
    }else{
      echo "<h4>Invalid Creds</h4>";
    }
  }
?>