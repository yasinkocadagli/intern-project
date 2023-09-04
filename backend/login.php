<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Gelen verileri temizleme
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
    
    if ($email === false || empty($password)) {
        echo "Geçersiz e-posta veya şifre.";
        exit;
    }
    
    $data = array(
        'username' => $email,
        'password' => $password
    );
    
    $ch = curl_init("https://api.jotform.com/user/login");
    
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    
    $response = curl_exec($ch);
    
    if ($response === false) {
        echo "cURL Hatası: " . curl_error($ch);
    } else {
        $responseData = json_decode($response, true);
        
        if (isset($responseData['responseCode']) && $responseData['responseCode'] == 200) {
            $apiKey = $responseData['content']['access_token'];
            $_SESSION['apiKey'] = $apiKey;
            
            $_SESSION['avatarUrl'] = $responseData['content']['avatarUrl'];
            
            // Güvenli bir şekilde oturum açıldıktan sonra başka bir sayfaya yönlendirme
            header("Location: pages.php");
            exit;
        } else {
            echo "Oturum Açma Başarısız.";
        }
    }
    
    curl_close($ch);
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
