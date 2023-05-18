<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "josephpobega@proton.me";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message. We'll be in touch shortly!";
    } else {
        echo "Oops! Something went wrong. Please try again.";
    }
}
?>
