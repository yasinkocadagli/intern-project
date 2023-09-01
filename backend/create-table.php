<?php
include('db.php');
session_start();

if (isset($_SESSION['tableNumber'])) {
    $_SESSION['tableNumber'] += 1;
} else {
    $_SESSION['tableNumber'] = 0;
}

$tableName = "new_table" . $_SESSION['tableNumber'];

$sql = "CREATE TABLE IF NOT EXISTS $tableName (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    notes TEXT
)";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully: $tableName";
} else {
    echo "Error creating table: " . $conn->error;
}

header("Location: pages.php");
?>
