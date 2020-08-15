<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
// function to retrieve data via http request
function getData()
{
    $array = [
        "code" => $_GET["code"],
        "username" => $_GET["username"],
        "email" => $_GET["email"],
    ];

    return $array;
}

// Assign data var to the data
$data = getData();

// Initialize PHPMailer
$mail = new PHPMailer(true);

// From Email
$email_from = "accounts@studybuddy.dev";

// Template File with HTML Code
$template_file = "template.php";

// Array Swapping var
$swap_var = array(
    "{SUBJECT}" => "Confirm Your StudyBuddy Account!",
    "{VERIFICATION_CODE}" => $data["code"],
    "{USERNAME}" => $data["username"],
    "{EMAIL}" => $data["email"]
);

// Get contents of template
if (file_exists($template_file)) {
    $email_message = file_get_contents($template_file);
}
// swapping process
foreach (array_keys($swap_var) as $key) {
    if (strlen($key) > 2 && trim($swap_var[$key]) != '')
        $email_message = str_replace($key, $swap_var[$key], $email_message);
}

// Set message to Html
$mail->isHTML(true);
// Use SMTP
$mail->isSMTP();

// From Email + Username
$mail->From = $email_from;
$mail->FromName = "StudyBuddy Team";

# Address to Send to
$mail->addAddress($swap_var['{EMAIL}'], $swap_var['{USERNAME}']);


$mail->Subject = $swap_var['{SUBJECT}'];
$mail->Body = $template_file;
$mail->AltBody = "This is the plain text version of the email content";

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
