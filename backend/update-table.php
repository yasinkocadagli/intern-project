<?php
include('db.php');

if(isset($_GET['id'])){
    $table_id = $_GET['id'];
    $update_query = "UPDATE tables SET ";
    $params = array();

    if(isset($_GET['title'])){
        $title = $_GET['title'];
        $update_query .= "title = ?, ";
        $params[] = $title;
    }

    if(isset($_GET['category'])){
        $category = $_GET['category'];
        $update_query .= "category = ?, ";
        $params[] = $category;
    }

    if(isset($_GET['imageid'])){
        $imageid = $_GET['imageid'];
        $update_query .= "imageid = ?, ";
        $params[] = $imageid;
    }

    if (empty($params)) {
        echo json_encode(array("message" => "Hiçbir parametre güncellenmedi."));
    } else {
        
        $update_query = rtrim($update_query, ", ") . " WHERE id = ?";
        $params[] = $table_id;

        
        $stmt = $conn->prepare($update_query);
        if ($stmt) {
            
            $types = str_repeat("s", count($params));
            $stmt->bind_param($types, ...$params);

            if ($stmt->execute()) {
                echo json_encode(array("message" => "Tablo başarıyla güncellendi."));
            } else {
                echo json_encode(array("message" => "Tablo güncellenirken bir hata oluştu: " . $stmt->error));
            }

            $stmt->close();
        } else {
            echo json_encode(array("message" => "Hazır ifade oluşturulurken bir hata oluştu: " . $conn->error));
        }
    }
} else {
    echo json_encode(array("message" => "Güncelleme için gerekli parametreler eksik."));
}

mysqli_close($conn);
?>
