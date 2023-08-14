
<?php
session_start();
echo '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/forumProject/Codingforum">Coding forum</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/forumProject/Codingforum">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/forumProject/Codingforum/about.php">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Category
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">';
        $sql = "SELECT category_name, category_id FROM category ";
        $result = $conn->query($sql);
   
   if ($result->num_rows>0) {

    while($row = $result->fetch_assoc()) {
    echo '<a class="dropdown-item" href="/forumProject/Codingforum/threadlist.php?id='.$row['category_id'].'">'.$row['category_name'].'</a>';

    }

  }

          
          
       echo '</div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/forumProject/Codingforum/contact.php">Contact</a>
      </li>
    </ul>
    <div class="my-2 row">';
    if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']==true)
    {
        echo '<form class="form-inline my-2 my-lg-0" method="get" action="search.php" >
        <input class="form-control mr-sm-2" type="search" name="search"  placeholder="Search" aria-label="Search">
        <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <p class="text-light my-0 mx-2">Welcome to '.$_SESSION['username'].' </p>
      <a href="./partial/logout.php" class="btn btn-outline-success ml-2" >Logout</a>
      ' ;
    }
    else{

        echo '<form class="form-inline my-2 my-lg-0" method="get" action="search.php/">
      <input class="form-control mr-sm-2" type="search" name="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
    </form>
        <button class="btn btn-outline-success ml-2" data-toggle="modal" data-target="#loginModal" >Login</button>
    
        <button class="btn btn-outline-success mx-2" data-toggle="modal" data-target="#signupModal" >Signup</button>';
    }
   
   
        echo '
        </div>
    
  </div>
</nav>';
include'_loginModal.php';
include'_signupModal.php';

if(isset($_GET['signup']) && $_GET['signup']==true)
{ 
    
    echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong>You are successfuly signup.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>';
}


?>