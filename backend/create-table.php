<?php
include('db.php');
session_start();

$response = array(); // JSON yanıtı için boş bir dizi oluşturun

if (isset($_SESSION['tableNumber'])) {
    $_SESSION['tableNumber'] += 1;
} else {
    $_SESSION['tableNumber'] = 0;
}

$tableName = "tables" . $_SESSION['tableNumber'];
$category = "company";
$imageid = 1;
$isfavorite = 0;

$tableName = filter_var($tableName, FILTER_SANITIZE_STRING);
$category = filter_var($category, FILTER_SANITIZE_STRING);
$imageid = filter_var($imageid, FILTER_SANITIZE_NUMBER_INT);
$isfavorite = filter_var($isfavorite, FILTER_SANITIZE_NUMBER_INT);

$stmt = $conn->prepare("INSERT INTO tables (title, category, imageid, isfavorite) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssii", $tableName, $category, $imageid, $isfavorite);

if ($stmt->execute()) {
    $response['status'] = 'success';
    $response['message'] = "Table created successfully: $tableName";
    $response['table_name'] = $tableName;
} else {
    $response['status'] = 'error';
    $response['message'] = "Error creating table: " . $stmt->error;
}

$stmt->close();
$conn->close();

// JSON yanıtını döndürün
header('Content-Type: application/json');
echo json_encode($response);
?>
