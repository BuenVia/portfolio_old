<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];

if (isset($_POST['comment-submit'])) {
    if (empty($name) || empty($email) || empty($phone) || empty($msg)){
      header("Location: ../index?error=emptyfields");
      exit();
      } else {
          ini_set( 'display_errors', 1 );
          error_reporting( E_ALL );
  
          $from = "webmaster@buenvia.com";
          $to = "matt@buenvia.com";
          $subject = "ENQUIRY: Buenvia";
          $headers = "From:" . $from;
  
          $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Phone: {$phone}", "Message:", $msg];
          $body = join(PHP_EOL, $bodyParagraphs);
  
          if(mail($to,$subject,$body,$headers)) {
            header("Location: ../index?commentsubmit=success");
          } else {
              header("Location: ../index?commentsubmit=fail");
          }
      }
  }
?>