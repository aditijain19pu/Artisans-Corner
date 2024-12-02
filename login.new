<?php

include 'connection.php';
/*include 'con2.php';*/

if(isset($_POST['signin'])){

 $email = $_POST['email'];
 $password = $_POST['password'];
 
 $sql = "SELECT * FROM userdata WHERE email='$email' and password='$password'";
 $result = mysqli_query($con, $sql);
 $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
 $count = mysqli_num_rows($result);
 if($count==1){
	 header("Location:index.php");
 }
 else{
	 echo '<script>Login Failed.Invalid username or password</script>';
 }
/* $q = " SELECT * FROM `login`(`email`, `password`, `subject` , `phone` ,`message`) VALUES ('$firstname', '$lastname', '$subject' , '$phone' ,'$message')";*/

 $query = mysqli_query($con,$q);
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="login.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>

    <div class="wrapper">
        <form action="dupArtisans.html" method="POST" id="loginForm">
            <h1> LOGIN</h1>
            <!--div class="input-box">
                <input type="text" id="username" name="username" placeholder="Username" required>
                <box-icon type='solid' name='user'></box-icon>
                <i id="user" class='bx bxs-user'></i>
            </!--div-->

            <div class="input-box">
                <input type="text" id="email" name="email" placeholder="email" required>
                <box-icon type='solid' name='user'></box-icon>
                <i id="user" class='bx bxs-user'></i>
            </div>

            <div class="input-box">
                <input type="password" id="password" name="password" placeholder="Password" required>
                <box-icon type='solid' name='lock-alt'></box-icon>
                <i id="pass" class='bx bxs-lock-alt'></i>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox"> Remember Me</label>
                <a href="forgotpassword.html">Forget Password?</a>
            </div>
            <div class="wrap">
                <button class="button" type="submit" name="signin">Login</button>
            </div>
            <div class="register-link">
                <p>Don't have an Account?  </p>
                <a href="register.html">Register</a>
            </div>
        </form>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('loginForm');
        
            form.addEventListener('submit', (event) => {
                // The actual form submission will happen via POST now.
                // You can implement client-side validation here if needed.
            });
        });
    </script>

</body>
</html>
