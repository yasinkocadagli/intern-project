<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
include('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    
    $table_id = filter_input(INPUT_GET, 'table_id', FILTER_SANITIZE_NUMBER_INT);
    $new_image_id = filter_input(INPUT_GET, 'new_image_id', FILTER_SANITIZE_NUMBER_INT);

    if (!$table_id || !$new_image_id) {
        die("Invalid table_id or new_image_id parameters.");
    }

    
    $update_query = "UPDATE tables SET imageid = ? WHERE id = ?";

    $stmt = $conn->prepare($update_query);
    if ($stmt) {
        $stmt->bind_param("ii", $new_image_id, $table_id);

        if ($stmt->execute()) {
            echo json_encode(array("message" => "Table image updated successfully."));
        } else {
            echo json_encode(array("message" => "An error occurred while updating the table image: " . $stmt->error));
        }

        $stmt->close();
    } else {
        echo json_encode(array("message" => "Error preparing statement: " . $conn->error));
    }

    mysqli_close($conn);
} else {
    die("This endpoint only supports GET requests for updating table images.");
}
?>
