<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

$name = $input['name'];
$email = $input['email'];
$message = $input['message'];

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = 2;
    $mail->isSMTP(true);
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'sanjs965@gmail.com';
    $mail->Password = 'contraseñasupersecreta';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    ## MENSAJE A ENVIAR
    $mail->setFrom('sanjs965@gmail.com');
    $mail->addAddress('sanjs965@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = 'Consulta alojamiento';
    $mail->Body = <<<EOT
        Email: $email
        Name: $name
        Message: $message
EOT;
    $mail->send();
} catch (Exception $exception) {
    echo 'Algo salio mal', $exception->getMessage();
}

?>