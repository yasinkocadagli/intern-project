<?php
include('db.php');

if(isset($_GET['id'])){
    $table_id = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);

    if ($table_id <= 0) {
        echo json_encode(array("message" => "Invalid 'id' value."));
        exit;
    }

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


