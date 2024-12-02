<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $contact = htmlspecialchars($_POST['contact']);
    $age = htmlspecialchars($_POST['age']);
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    // For demonstration purposes, you can echo the data
    echo "<h3>Form Data Submitted:</h3>";
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Contact Number: $contact<br>";
    echo "Age: $age<br>";
    echo "Username: $username<br>";

    // You can also redirect back to the form or to a success page
    // header('Location: register.php'); // Uncomment to redirect back
    // exit();
} else {
    // If the page is accessed without submitting the form, redirect to the form
    header('Location: register.php');
    exit();
}
