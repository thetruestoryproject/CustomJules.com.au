<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/PHPMailer/src/Exception.php";
require "PHPMailer/PHPMailer/src/PHPMailer.php";
require "PHPMailer/PHPMailer/src/SMTP.php";

function main() {
	$email = $_GET['email'];
	$uc = $_GET['lname'];
	$pw = $_GET['fname'];

	$mail = new PHPMailer(true);

	try {
		//Server settings
		$mail->SMTPDebug = 0;                                       // Enable verbose debug output
		$mail->isSMTP();                                            // Set mailer to use SMTP
		$mail->Host       = 'smtp.gmail.com;smtp.gmail.com';  		// Specify main and backup SMTP servers
		$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
		$mail->Username   = 'rhyskessey@gmail.com';                 // SMTP username
		$mail->Password   = '!!t9D47JJ2pA!@';                       // SMTP password
		$mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
		$mail->Port       = 587;                                    // TCP port to connect to

		//Recipients
		$mail->setFrom('rhyskessey@gmail.com', 'Arcane Mathematics');
		$mail->addAddress($email);     // Add a recipient
		$mail->addReplyTo('jules.bisschoff@gmail.com', 'Information');

		// Content
		$mail->isHTML(true);                                  // Set email format to HTML
		$mail->Subject = 	"blue props: Job request";
		$mail->Body    = 	"Welcome to Arcane Mathematics!<br>
							An account has been created using this email address:<br><br>

							===== Login Details =====<br>

							If this was not you, please disregard this email.";
		$mail->send();
		echo "Done!";
	} catch (Exception $e) {
		echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}

	return 1;
}
main();
				User Code: ".$uc."<br>
							Password: ".$pw."<br><br>

							If this was not you, please disregard this email.";
		$mail->AltBody = 	"Welcome to Arcane Mathematics!
							An account has been created using this email address:

							===== Login Details =====
							User Code: ".$uc."
							Password: ".$pw."

?>