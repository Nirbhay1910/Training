<?php 
  session_start();
  include("db_connection.php") ;
  error_reporting(E_ALL ^ E_WARNING);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Database Queries</title>
</head>
<body>
  <h3>Login/Signup Method</h3>
  <?php if($_SESSION["isLoggedIn"]===true){ 
    echo "<h4>You are logged in as:" . $_SESSION["username"] . "</h4>";
  ?>
    <form action="/database_practice/logout.php" method="POST">
    <input type="submit" value="Logout">
  </form>
  <?php }
  else{
  ?>
  <h4>Login Form</h4>
  <form action="/database_practice/login.php" method="POST">
    Email: <input type="email" name="usermail">
    Password: <input type="password" name="password">
    <input type="submit">
  </form>
  <h4>Signup Form</h4>
  <form action="/database_practice/signup.php" method="POST">
    Name: <input type="text" name="username">
    Email: <input type="email" name="usermail">
    Password: <input type="password" name="password">
    Confirm Password: <input type="password" name="cpassword">
    <input type="submit">
  </form>
  <?php } ?>
</body>
</html>