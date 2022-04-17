<?php
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $message = $_REQUEST['message'];
    
    if(empty($name) || empty($email) || empty($message))
    {
        echo "<script>alert('Please, fill all the fields');
        window.history.log(-1);</script>";
    }
    else
    {
        mail("lovachandralokesh@gmail.com","Message from Portfolio Website",$message,"From: $name Email: $email");
        echo "<script>alert('Message sent successfully');
        window.history.log(-1);</script>";
    }
?>