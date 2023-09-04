<?php
include('db.php');

if(isset($_GET['id'])){
    $table_id = filter_var($_GET['id'], FILTER_VALIDATE_INT);

    if ($table_id === false || $table_id <= 0) {
        echo json_encode(array("message" => "Invalid table_id value."));
        exit;
    }

    $update_query = "UPDATE tables SET ";
    $params = array();

    if(isset($_GET['title'])){
        $title = filter_var($_GET['title'], FILTER_SANITIZE_STRING);
        $update_query .= "title = ?, ";
        $params[] = $title;
    }

    if(isset($_GET['category'])){
        $category = filter_var($_GET['category'], FILTER_SANITIZE_STRING);
        $update_query .= "category = ?, ";
        $params[] = $category;
    }

    if(isset($_GET['imageid'])){
        $imageid = filter_var($_GET['imageid'], FILTER_VALIDATE_INT);

        if ($imageid !== false && $imageid >= 0) {
            $update_query .= "imageid = ?, ";
            $params[] = $imageid;
        }
    }

    if(isset($_GET['isfavorite'])){
        $isfavorite = filter_var($_GET['isfavorite'], FILTER_VALIDATE_INT);

        if ($isfavorite !== false && ($isfavorite === 0 || $isfavorite === 1)) {
            $update_query .= "isfavorite = ?, ";
            $params[] = $isfavorite;
        }
    }

    if (empty($params)) {
        echo json_encode(array("message" => "No valid parameters were updated."));
    } else {
        
        $update_query = rtrim($update_query, ", ") . " WHERE id = ?";
        $params[] = $table_id;

        
        $stmt = $conn->prepare($update_query);
        if ($stmt) {
            
            $types = str_repeat("s", count($params));
            $stmt->bind_param($types, ...$params);

            if ($stmt->execute()) {
                echo json_encode(array("message" => "Table updated successfully."));
            } else {
                echo json_encode(array("message" => "An error occurred while updating the table: " . $stmt->error));
            }

            $stmt->close();
        } else {
            echo json_encode(array("message" => "An error occurred while preparing the statement: " . $conn->error));
        }
    }
} else {
    echo json_encode(array("message" => "Required parameters for updating are missing."));
}

mysqli_close($conn);
?>
