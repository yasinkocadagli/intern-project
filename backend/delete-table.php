<?php
include('db.php'); 

if(isset($_GET['id'])){
    $table_id = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);

    if ($table_id <= 0) {
        echo json_encode(array("message" => "Invalid table_id value."));
        exit;
    }

    if (!is_numeric($table_id)) {
        echo json_encode(array("message" => "Invalid table_id value."));
        exit;
    }

    $delete_query = "DELETE FROM tables WHERE id = ?";

    $stmt = $conn->prepare($delete_query);

    if ($stmt) {
        
        $stmt->bind_param("i", $table_id);

        if ($stmt->execute()) {
            header('Location: get-tables.php');
            exit;
        } else {
            echo json_encode(array("message" => "An error occurred while deleting the table: " . $stmt->error));
        }

        $stmt->close();
    } else {
        echo json_encode(array("message" => "An error occurred while preparing the statement."));
    }
} else {
    echo json_encode(array("message" => "table_id not specified."));
}

$conn->close();
?>
