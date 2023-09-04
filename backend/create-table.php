<?php
include('db.php');
session_start();

if (isset($_SESSION['tableNumber'])) {
    $_SESSION['tableNumber'] += 1;
} else {
    $_SESSION['tableNumber'] = 0;
}

$tableName = "tables" . $_SESSION['tableNumber'];
$category = "company";
$imageid = 1;


$stmt = $conn->prepare("INSERT INTO tables (title, category, imageid) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $tableName, $category, $imageid);


$tableName = "tables" . $_SESSION['tableNumber'];
$category = "company";
$imageid = 1;

if ($stmt->execute()) {
    echo "Table created successfully: $tableName";
} else {
    echo "Error creating table: " . $stmt->error;
}

$stmt->close();
$conn->close();

header("Location: pages.php");
?>
