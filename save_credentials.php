<?php
// Connect to the database
$servername = "localhost";
$username = "your_database_username"; 
$password = "your_database_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$user = $_POST['username'];
$pass = $_POST['password'];

// Hash the password for security (Recommended: use password_hash in production)
$hashed_password = password_hash($pass, PASSWORD_DEFAULT);

// Prepare and bind the SQL statement to avoid SQL injection
$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $user, $hashed_password);

// Execute the statement and check for success
if ($stmt->execute()) {
    echo "Credentials saved successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connections
$stmt->close();
$conn->close();
?>
