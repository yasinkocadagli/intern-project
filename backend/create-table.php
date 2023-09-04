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
$isfavorite = 0;

// Sanitize the variables using filter_var
$tableName = filter_var($tableName, FILTER_SANITIZE_STRING);
$category = filter_var($category, FILTER_SANITIZE_STRING);
$imageid = filter_var($imageid, FILTER_SANITIZE_NUMBER_INT);
$isfavorite = filter_var($isfavorite, FILTER_SANITIZE_NUMBER_INT);

$stmt = $conn->prepare("INSERT INTO tables (title, category, imageid, isfavorite) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssii", $tableName, $category, $imageid, $isfavorite);

if ($stmt->execute()) {
    echo "Table created successfully: $tableName";
} else {
    echo "Error creating table: " . $stmt->error;
}

$stmt->close();
$conn->close();

header("Location: pages.php");
?>
