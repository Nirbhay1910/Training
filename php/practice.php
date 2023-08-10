<?php
  session_start(); //It should be the very first line in code 
  $globalNum1 = 45;
  $globalNum2 = 34;
  $globalNum3;
  $cookie_name = "user";
  $cookie_value = "Nirbhay Jain";
  setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); //setcookie must before <html> tag
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php
  include "header.php";

  echo "<h2>Variables</h2>";
  $characterName = "John";
  $age = 25;
  echo "$characterName is the world's best detective. At the age of $age, he already solved 300+ cases all over the World.";

  //// Datatypes ////
  echo "<h2>Datatypes</h2>";
  $phrase = "hi, it is a string"; //string
  $age = 30; //integer
  $cgpa = 9.4; //floating point number
  $passout = true; //boolean
  // null => no value

  ////// working with strings ///////
  echo "<h2>Working with strings</h2>";
  echo "<br>";
  $phrase = "GIRAFFE ACAdemy";
  echo strtolower($phrase);
  echo strtoupper($phrase);
  echo strlen($phrase);
  echo $phrase[0];
  echo substr($phrase,8,3);// starting from 8th index to length 3

  ////// working with numbers //////
  echo "<h2>Working with Numbers</h2>";
  echo "<br>";
  echo 4+5 * 2;
  echo "<br>";
  echo 10%3;
  echo "<br>";
  $num = 10;
  $num++;
  $num--;
  echo $num;
  echo "<br>";
  //many math operators like abs(), pow(), max(), min() available just like in c++

  //////// user input ////////
?>
<h2>User Input</h2>
<form action = "practice.php" method = "get">
  Name: <input type="text" name="username">
  Age: <input type="text" name="age">
  <input type="submit">
</form>
<br>
<?php
  echo "Your name is: " . $_GET["username"]??null . "<br>";
  echo "Your age is: " . $_GET["age"]??null . "<br>";
?>
<form action = "practice.php" method = "get">
  num1: <input type="number" name="num1">
  num2: <input type="number" name="num2">
  <input type="submit">
</form>
Sum: <?php echo $_GET["num1"]??0 + $_GET["num2"]??0?>

<form action="practice.php" method="post">
  Password: <input type="password" name="password">
  <input type="submit">
</form>
Your Password is: <?php echo $_POST["password"]??null ?>
<br>
<br>
<!-- //////// Arrays /////////// -->
<h2>Arrays</h2>
<?php

 $friends = array("Kevin", "Josh", "Ken", "Tom", "Jim"); 
 $friends[6]="Shero";
 echo count($friends);
?>
<form action="practice.php" method="post">
  Apples: <input type="checkbox" name="fruits[]" value="apple">
  Oranges: <input type="checkbox" name="fruits[]" value="orange">
  Pears: <input type="checkbox" name="fruits[]" value="pear">
  <input type="submit">
</form>
<?php 
  $fruits = $_POST["fruits"];
  echo $fruits[1];
?>
<br>
<br>
<?php
  $grades = array("Jim"=> "A+", "Pam"=> "B", "Oscar"=>"A");
  echo $grades["Jim"];
?>

<!-- if else, switch, loops all are like c++ -->

<!-- ///////////// Classes ////////////// -->
<h2>Classes basic</h2>
<?php 
  class Book{
    public $title;
    public $author;
    public $pages;
    public function __construct($title, $author, $pages){
      $this->title = $title;
      $this->author = $author;
      $this->pages = $pages;
    }
    public function hasManyPages(){
      if($this->pages>100){
        return "has many pages";
      }else{
        return "too thin";
      }
    }
    protected function message(){
      echo "Hello I am protected";
    }
  }

  class FantasyBook extends Book {
    function specialFn(){
      $this->message(); //protected fn can be used in derived classes
    }
  }
  $book1 = new Book("Hungeryyy games","Nirbhay",235);
  print_r($book1);
  echo $book1->hasManyPages();
  echo "<br>";
  $book2 = new FantasyBook('harry potter',"JK Rowling", "20"); //It can access Book public constructor and methods
  print_r($book2);
  $book2->specialFn();
  
  ///Constants///
  echo "<h2>Constant</h2>";

  echo "<br>";
  define("GREETING","Hello!!!!!");
  echo GREETING;
  echo "<br>";

  ///Looping in assoc array ///
  echo "<h2>Looping in assoc array</h2>";
  $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

  foreach($age as $x => $x_value) {
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
  }

  //// array sort ///
  echo "<h2>Array sort type</h2>";

  $numbers = array(4, 6, 2, 22, 11);
  sort($numbers);

  $arrlength = count($numbers);
  for($x = 0; $x < $arrlength; $x++) {
    echo $numbers[$x];
    echo "<br>";
  }
  /*
    * sort() - sort arrays in ascending order
    * rsort() - sort arrays in descending order
    * asort() - sort associative arrays in ascending order, according to the value
    * ksort() - sort associative arrays in ascending order, according to the key
    * arsort() - sort associative arrays in descending order, according to the value
    * krsort() - sort associative arrays in descending order, according to the key
   */

   //// Globals /////
   echo "<h2>Globals</h2>";
  function addition() {
    $GLOBALS['globalNum3'] = $GLOBALS['globalNum1'] + $GLOBALS['globalNum2'];
  }
  addition();
  echo $globalNum3;
  echo "<br>";

  ////// SERVER vars ///////
  echo "<h2>Server Vars</h2>";
  echo $_SERVER['PHP_SELF'];
  echo "<br>";
  echo $_SERVER['SERVER_NAME'];
  echo "<br>";
  echo $_SERVER['HTTP_HOST'];
  echo "<br>";
  echo $_SERVER['HTTP_USER_AGENT'];
  echo "<br>";
  echo $_SERVER['SCRIPT_NAME'];
  echo "<br>";
  echo $_SERVER['QUERY_STRING'];
  echo "<br>";
  echo $_SERVER['REQUEST_METHOD'];
  echo "<br>";

  // $_SERVER['PHP_SELF'] can be exploited by hackers so always wrap it in htmlspecialchars($_SERVER["PHP_SELF"])

?>

<!-- ////////////////// FORMS //////////////////// -->

<?php
  echo "<h2>Final Forms</h2>";
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { ///used to check email
      $emailErr = "Invalid email format";
    }
  }
    
  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
      $websiteErr = "Invalid URL";
    }
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<h2>PHP Form Validation Example</h2>
<p><span class="error">* required field</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  Name: <input type="text" name="name" value="<?php echo $name;?>">
  <span class="error">* <?php echo $nameErr;?></span>
  <br><br>
  E-mail: <input type="text" name="email" value="<?php echo $email;?>">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>
  Website: <input type="text" name="website" value="<?php echo $website;?>">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>
  Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
  <br><br>
  Gender:
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="female") echo "checked";?> value="female">Female
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="male") echo "checked";?> value="male">Male
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="other") echo "checked";?> value="other">Other  
  <span class="error">* <?php echo $genderErr;?></span>
  <br><br>
  <input type="submit" name="submit" value="Submit">  
</form>

<?php
echo "<h2>Your Input:</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $website;
echo "<br>";
echo $comment;
echo "<br>";
echo $gender;
?>

<!-- ////////////DATE//////// -->
<?php
  echo "<h2>DATE</h2>";
  date_default_timezone_set('Asia/Kolkata');
  echo "The time is " . date("h:i:sa");
?>


<!-- FILE HANDLING -->
<?php 

echo "<h2>FILE HANDLING</h2>";
echo "<h4>Reading</h4>";
  echo readfile('data.txt');
  echo "<br>";
  $myfile = fopen("data.txt", "r") or die("Unable to open file!");
  echo fread($myfile,filesize("data.txt"));
  fclose($myfile);

  echo "<h4>Writing</h4>";

  $myfile = fopen("newfile.txt", "w+") or die("Unable to open file!"); //w+ means write and read with overwriting
  $txt = "John Doe\n";
  fwrite($myfile, $txt);
  $txt = "Jane Doe\n";
  fwrite($myfile, $txt);
  fclose($myfile);

  $myfile = fopen("newfile.txt", "w") or die("Unable to open file!"); // w will overwrite everything in file
  $txt = "Mickey Mouse\n";
  fwrite($myfile, $txt);
  $txt = "Minnie Mouse\n";
  fwrite($myfile, $txt);
  fclose($myfile);

  $myfile = fopen("newfile.txt", "a") or die("Unable to open file!"); // a will append new text
  $txt = "Donald Duck\n";
  fwrite($myfile, $txt);
  $txt = "Goofy Goof\n";
  fwrite($myfile, $txt);
  fclose($myfile);
  
  $myfile = fopen("newfile.txt", "r") or die("Unable to open file!");
  echo fread($myfile,filesize("data.txt"));
  fclose($myfile);
?>

<h2>Cookie</h2>
<?php
  if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set!";
  } else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
  }
?>
<h2>Session</h2>
<?php 
  $_SESSION["favcolor"] = "green";
  $_SESSION["favanimal"] = "cat";
  echo "Session variables are set. <br>";
?>
<h2> Callbacks </h2>
<?php 
$strings = ["apple", "orange", "banana", "coconut"];
$lengths = array_map( function($item) { return strlen($item); } , $strings);
print_r($lengths);
function exclaim($str) {
  return $str . "! ";
}

function ask($str) {
  return $str . "? ";
}

function printFormatted($str, $format) {
  // Calling the $format callback function
  echo $format($str);
}

// Pass "exclaim" and "ask" as callback functions to printFormatted()
printFormatted("Hello world", "exclaim");
printFormatted("Hello world", "ask");
?>
<h2>Exceptions </h2>
<?php
function divide($dividend, $divisor) {
  if($divisor == 0) {
    throw new Exception("Division by zero");
  }
  return $dividend / $divisor;
}

try {
  echo divide(5, 0);
} catch(Exception $e) {
  echo "Unable to divide.";
}
?>
</body>
</html>