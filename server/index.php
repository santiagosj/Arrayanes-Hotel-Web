<?php

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

$name = $input['name'];
$email = $input['email'];
$message = $input['message'];

$developmentMode = false;
$mailer = new PHPMailer($developmentMode);

   try {
       $mailer->SMTPDebug = 4;
       $mailer->isSMTP(true);

     if ($developmentMode) {
       $mailer->SMTPOptions = [
         'ssl'=>[
           'verify_peer'=>false,
           'verify_peer_name'=>false,
           'allow_self_signed' => true
         ]
       ];
     }

  $mailer->Host ='smtp.gmail.com';
  $mailer->SMTPAuth = true;
  $mailer->Username = 'sendermail@mail.com';
  $mailer->Password ='XXXXXXXXXXXXXXXXXXXXX';
  $mailer->SMTPSecure='tls';
  $mailer->Port = 587;

  $mailer->setFrom('sendermail@mail.com','Arrayanes-Web');
  $mailer->addAddress('mailto@mail.com','Juan de los palotes');

  $mailer->isHTML(false);
  $mailer->Subject = 'Consulta';
  $mailer->Body = <<<EOT
    Email: $email
    Name: $name
    Message: $message
EOT;

  $mailer->send();
  $mailer->ClearAllRecipients();
  echo"MENSJE ENVIADO!";

   } catch (\Exception $e) {
     echo"CUACK!" . $mailer->ErrorInfo;
   }

 ?>
