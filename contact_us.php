<?php
    
    if(isset($_POST['submit']))
    {
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $email_id = $_POST['email'];
    $msg = $_POST['message'];
    
    $to = "MylesColina@icloud.com";
    $subject = $_POST['subject'];
    
    // HTML Message Starts here
    $message ="
    <html>
        <body>
            <table style='width:600px;'>
            <tbody>
            <tr>
            <td style='width:150px'><strong>FirstName: </strong></td>
            <td style='width:400px'>$fname</td>
            </tr>
            <tr>
            <td style='width:150px'><strong>LastName: </strong></td>
            <td style='width:400px'>$lname</td>
            </tr>
            <tr>
            <td style='width:150px'><strong>Email ID: </strong></td>
            <td style='width:400px'>$email_id</td>
            </tr>
            <tr>
            <td style='width:150px'><strong>Message: </strong></td>
            <td style='width:400px'>$msg</td>
            </tr>
            </tbody>
            </table>
        </body>
    </html>
    ";
    // HTML Message Ends here
    
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // More headers
    $headers .= 'From: Admin <MylesColina@icloud.com>' . "\r\n"; // Give an email id on which you want get a reply. User will get a mail from this email id
   
    if(mail($to,$subject,$message,$headers)){
        // Message if mail has been sent
        echo "<script>
        alert('Mail has been sent Successfully.');
        </script>";
    }
    
    else{
        // Message if mail has been not sent
        echo "<script>
        alert('EMAIL FAILED');
        </script>";
    }
    }
    ?>