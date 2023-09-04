<?php
session_start();


$allowedDomains = array('http://localhost:3000');

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedDomains)) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: Content-Type');
}

if (isset($_SESSION['avatarUrl'])) {
    $avatarUrl = $_SESSION['avatarUrl'];
} else {
    $avatarUrl = '';
}

$response = array('avatarUrl' => $avatarUrl);

header('Content-Type: application/json');
echo json_encode($response);
?>
