<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
include('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT * FROM images";
    $result = mysqli_query($conn, $query);

    if (!$result) {
        die("Error retrieving image data: " . mysqli_error($conn));
    }

    $imagesData = array();
    while ($row = mysqli_fetch_assoc($result)) {
        
        $imageData = array(
            "id" => filter_var($row['id'], FILTER_SANITIZE_NUMBER_INT),
            "imageUrl" => filter_var($row['imageUrl'], FILTER_SANITIZE_URL)
        );
        $imagesData[] = $imageData;
    }

    mysqli_free_result($result);
    mysqli_close($conn);

    echo json_encode($imagesData);
    exit;
} else {
    die("This endpoint only supports GET requests for retrieving image data.");
}
?>
