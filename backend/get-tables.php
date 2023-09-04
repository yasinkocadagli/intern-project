<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
include('db.php');

$query = "SELECT t1.*, t2.imageUrl FROM tables t1 LEFT JOIN images t2 ON (t1.imageid = t2.id) WHERE 1";

if (isset($_GET['title'])) {
    $title = filter_var($_GET['title'], FILTER_SANITIZE_STRING);
    $query .= " AND t1.title = ?";
}

if (isset($_GET['category'])) {
    $category = filter_var($_GET['category'], FILTER_SANITIZE_STRING);
    $query .= " AND t1.category = ?";
}

if (isset($_GET['imageid'])) {
    $imageid = filter_var($_GET['imageid'], FILTER_SANITIZE_NUMBER_INT);
    $query .= " AND t1.imageid = ?";
}

if (isset($_GET['isfavorite'])) {
    $isfavorite = filter_var($_GET['isfavorite'], FILTER_SANITIZE_NUMBER_INT);
    $query .= " AND t1.isfavorite = ?";
}

$stmt = $conn->prepare($query);

if ($stmt) {
    if (isset($title)) $stmt->bind_param("s", $title);
    if (isset($category)) $stmt->bind_param("s", $category);
    if (isset($imageid)) $stmt->bind_param("i", $imageid);
    if (isset($isfavorite)) $stmt->bind_param("i", $isfavorite);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        
        if (!$result) {
            die("Error retrieving tables: " . $stmt->error);
        }

        $tables = array();
        while ($row = $result->fetch_assoc()) {
            $tables[] = $row;
        }

        $stmt->close();
        mysqli_close($conn);
        
        echo json_encode($tables);
        exit;
    } else {
        die("Error executing query: " . $stmt->error);
    }
} else {
    die("Error preparing statement: " . $conn->error);
}
?>
