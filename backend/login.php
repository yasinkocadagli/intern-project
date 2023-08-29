<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $data = array(
        'username' => $username,
        'password' => $password
    );
    
    $ch = curl_init("https://api.jotform.com/user/login");
    
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    
    $response = curl_exec($ch);
    
    if ($response === false) {
        echo "cURL Error: " . curl_error($ch);
    } else {
        $responseData = json_decode($response, true);
        
        if (isset($responseData['responseCode']) && $responseData['responseCode'] == 200) {
            $apiKey = $responseData['content']['access_token'];
            $_SESSION['apiKey'] = $apiKey;
            
            header("Location: get-image.php");
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
    <title>Oturum Açma Formu</title>
</head>
<body>
    <form method="post" action="">
        <label for="username">Kullanıcı Adı:</label>
        <input type="text" name="username" required><br><br>
        
        <label for="password">Şifre:</label>
        <input type="password" name="password" required><br><br>
        
        <input type="submit" value="Oturum Aç">
    </form>
</body>
</html>
