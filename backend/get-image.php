<?php
session_start();

if (isset($_SESSION['avatarUrl'])) {
    $avatarUrl = $_SESSION['avatarUrl'];
}
?>

<!DOCTYPE html>
<html>
<head>
    
</head>
<body>
    <img src="<?php echo $avatarUrl; ?>" alt="">
</body>
</html>
