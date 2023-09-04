<?php
include('db.php');

if(isset($_GET['id'])){
    $table_id = $_GET['id'];

    $update_query = "UPDATE tables SET isfavorite = 1 WHERE id = ?";
    
    $stmt = $conn->prepare($update_query);
    $stmt->bind_param("i", $table_id);

    if ($stmt->execute()) {
        echo json_encode(array("message" => "Table with ID $table_id is set as favorite."));
    } else {
        echo json_encode(array("message" => "An error occurred while updating the table: " . $stmt->error));
    }

    $stmt->close();
} else {
    echo json_encode(array("message" => "Required 'id' parameter is missing."));
}

mysqli_close($conn);
?>
