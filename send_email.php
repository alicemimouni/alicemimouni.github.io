<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // Name cleaning and validation
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    if (!$name) {
        die("Erreur : Nom invalide.");
    }

    // email cleaning and validation
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Erreur : Email invalide.");
    }

    // message cleaning and validation
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    if (!$message) {
        die("Erreur : Message invalide.");
    }

    $to = "alicemimouni@outlook.com"; 
    $subject = "Nouveau message de $name";
    $headers = "From: $email";

    if(mail($to, $subject, $message, $headers)) {
        echo "Email envoyé avec succès.";
    } else {
        echo "L'envoi de l'email a échoué.";
    }
}
?>
