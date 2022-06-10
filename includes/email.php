<?php

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];

if (isset($_POST['comment-submit'])) {
    if (empty($name) || empty($email) || empty($msg)){
      header("Location: ../index.html?error=emptyfields#contact");
      exit();
      } else {
          ini_set( 'display_errors', 1 );
          error_reporting( E_ALL );
  
          $from = "webmaster@buenvia.com";
          $to = "matthewclifford@hotmail.co.uk";
          $subject = "ENQUIRY: Portfolio";
          $headers = "From:" . $from;
  
          $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Phone: {$phone}", "Message:", $msg];
          $body = join(PHP_EOL, $bodyParagraphs);
  
          if(mail($to,$subject,$body,$headers)) {
            header("Location: ../index.html?commentsubmit=success");
          } else {
              header("Location: ../index.html?commentsubmit=fail");
          }
      }
  }
?>