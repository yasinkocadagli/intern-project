<?php
include('db.php');
session_start();

if (isset($_SESSION['tableNumber'])) {
    $_SESSION['tableNumber'] += 1;
} else {
    $_SESSION['tableNumber'] = 0;
}

$tableName = "tables" . $_SESSION['tableNumber'];

$sql = "INSERT INTO  tables (
    title,
    imageUrl,
    category 
) VALUES ('{$tableName}','{imageUrl}','{category}')";


if ($conn->query($sql) === TRUE) {
    echo "Table created successfully: $tableName";
} else {
    echo "Error creating table: " . $conn->error;
}

header("Location: pages.php");
?>
