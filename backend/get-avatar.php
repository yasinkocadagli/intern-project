<?php
session_start();
// Diğer gerekli işlemler...

$response = array(
    'avatarUrl' => $_SESSION['avatarUrl']
);

echo json_encode($response);
?>