<?php
session_start();
if(isset($_POST['email']) && isset($_POST['name']) && isset($_POST['message'])) {
    if(is_null($_POST['email'])) {
        exitError('email', 'required');
    } elseif(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        exitError('email', 'invalid');
    } elseif(strlen($_POST['email']) > 200) {
        exitError('email', 'length');
    }
    $email = $_POST['email'];

    if(is_null($_POST['name'])) {
        exitError('name', 'required');
    } elseif(strlen($_POST['name']) > 200) {
        exitError('name', 'length');
    }
    $name = preg_replace("/[^ \w]+/", "", $_POST['name']);

    if(is_null($_POST['message'])) {
        exitError('message', 'required');
    } elseif(strlen($_POST['message']) > 2000) {
        exitError('message', 'length');
    }
    $message = strip_tags($_POST['message']);

    $emailMessage = 'From: ' . $name . '\nEmail: ' . $email . '\nMessage: ' . $message;
    $subject = 'Portfolio Message From: ' . $name;
    $from = 'From: contact@nicholasneale.com';
    $sendTo = 'me@nicholasneale.com';

    if(mail($sendTo, $subject, $emailMessage, $from)) {
        $_SESSION['success'] = true;
        header('Location: index.php');
        exit();
    } else {
        $_SESSION['success'] = false;
        header('Location: index.php');
        exit();
    }
} else {
    header('Location: index.php');
    exit();
}

function exitError($field, $type) {
    switch($field) {
        case 'email':
            break;
        case 'name':
            break;
        case 'message':
            break;
    }
}