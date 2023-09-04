<?php
include('db.php'); 

if(isset($_GET['id'])){
    
    $table_id = intval($_GET['id']);

    if ($table_id <= 0) {
        echo json_encode(array("message" => "Geçersiz table_id değeri."));
        exit;
    }

    
    $delete_query = "DELETE FROM tables WHERE id = ?";

    
    $stmt = $conn->prepare($delete_query);
    $stmt->bind_param("i", $table_id);

    if ($stmt->execute()) {
        header('Location: get-table.php');
        exit;
    } else {
        echo json_encode(array("message" => "Tablo silinirken bir hata oluştu: " . $stmt->error));
    }
} else {
    echo json_encode(array("message" => "table_id belirtilmedi."));
}

$conn->close();
?>
