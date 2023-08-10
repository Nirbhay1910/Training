
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php
  echo "<h1>Hello World</h1>";
  echo "<hr>";
  $characterName = "John";
  $age = 25;
  echo "$characterName is the world's best detective. At the age of $age, he already solved 300+ cases all over the World.";

  //// Datatypes ////
  $phrase = "hi, it is a string"; //string
  $age = 30; //integer
  $cgpa = 9.4; //floating point number
  $passout = true; //boolean
  // null => no value

  ////// working with strings ///////
  echo "<br>";
  $phrase = "GIRAFFE ACAdemy";
  echo strtolower($phrase);
  echo strtoupper($phrase);
  echo strlen($phrase);
  echo $phrase[0];
  echo substr($phrase,8,3);// starting from 8th index to length 3

  ////// working with numbers //////
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
<?php 
  class Book{
    public $title;
    public $author;
    public $pages;
    function __construct($title, $author, $pages){
      $this->title = $title;
      $this->author = $author;
      $this->pages = $pages;
    }
    function hasManyPages(){
      if($this->pages>100){
        return "has many pages";
      }else{
        return "too thin";
      }
    }
  }

  class FantasyBook extends Book {
    function __construct($title, $author, $page){
      parent::__construct($title, $author, $page);
    }
  }
  $book1 = new Book("Hungeryyy games","Nirbhay",235);
  print_r($book1);
  echo $book1->hasManyPages();
  echo "<br>";
  $book2 = new FantasyBook('harry potter',"JK Rowling", "20");
  print_r($book2);
  
?>
</body>
</html>