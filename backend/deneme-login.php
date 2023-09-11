<?php
require 'firebase/php-jwt';

use Firebase\JWT\JWT;

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];
    
    
    $servername = "localhost";
    $username = "kullanici_adi";
    $password_db = "parola";
    $dbname = "veritabani_adi";
    
    $conn = new mysqli($servername, $username, $password_db, $dbname);
    
    if ($conn->connect_error) {
        die("Veritabanı bağlantısı başarısız: " . $conn->connect_error);
    }
    
    
    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);
    
    if ($result->num_rows == 1) {
        
        $user = $result->fetch_assoc();
        $secret_key = "gizli_anahtar"; 
        
        $payload = array(
            "user_id" => $user["user_id"],
            "email" => $user["email"]
        );
        
        $jwt = JWT::encode($payload, $secret_key, 'HS256');
        
        // JWT'yi oturum içinde sakla
        $_SESSION["jwt"] = $jwt;
        
        // Kullanıcıyı yönlendir
        header("Location: pages.php");
        exit;
    } else {
        echo "Hatalı giriş bilgileri.";
    }
    
    $conn->close();
}
?>

<!DOCTYPE html>
<html>
<head>
    
</head>
<body>
    <form method="post" action="">
        <label for="email">E-posta:</label>
        <input type="email" name="email" required><br><br>
        
        <label for="password">Şifre:</label>
        <input type="password" name="password" required><br><br>
        
        <input type="submit" value="Oturum Aç">
    </form>
</body>
</html>
