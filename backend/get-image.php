<?php
session_start();

// Oturum açılmış mı kontrol ediyoruz
if (!isset($_SESSION['apiKey'])) {
    header("Location: login.php"); // Oturum açılmamışsa login sayfasına yönlendir
    exit;
}

$apiKey = $_SESSION['apiKey'];

// JotForm API'ye profil resmi isteği gönderiyoruz
$ch = curl_init("https://api.jotform.com/user?apiKey=$apiKey");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);

if ($response === false) {
    echo "cURL Error: " . curl_error($ch);
} else {
    $userData = json_decode($response, true);
    $avatarUrl = $userData['content']['avatarUrl']; // Profil resmi URL'si
}
curl_close($ch);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Tables Sayfası</title>
</head>
<body>
    <h1>Tables Sayfası</h1>
    
    <?php if (isset($avatarUrl)): ?>
        <img src="<?php echo $avatarUrl; ?>" alt="Profil Resmi">
    <?php else: ?>
        <p>Profil resmi bulunamadı.</p>
    <?php endif; ?>
</body>
</html>
