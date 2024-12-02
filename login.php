<!-- <!DOCTYPE html>
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
        <form action="login.php" method="POST" id="loginForm">
            <h1> LOGIN</h1>
            <div class="input-box">
                <input type="text" id="username" name="username" placeholder="Username" required>
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
                <button class="button" type="submit">Login</button>
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
</html> -->

<?php
$servername = "localhost"; // Change if using a different server
$username = "root"; // Change to your database username
$password = ""; // Change to your database password
$dbname = "login";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<?php
session_start();
include 'db_connect.php'; // Include the database connection script

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepare and bind
    $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Bind result variables
        $stmt->bind_result($id, $username, $hashed_password);
        $stmt->fetch();

        // Verify password
        if (password_verify($password, $hashed_password)) {
            $_SESSION['username'] = $username;
            header("Location: login.php");
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "No user found with this username.";
    }
    $stmt->close();
    $conn->close();
}

<
?php
session_start();
session_destroy();
header("Location: shop.html");
exit();
?>
