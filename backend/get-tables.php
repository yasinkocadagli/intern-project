<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
include('db.php');

$query = "SELECT t1.*, t2.imageUrl FROM tables t1 LEFT JOIN images t2 ON (t1.imageid = t2.id) WHERE 1";

if (isset($_GET['title'])) {
    $title = mysqli_real_escape_string($conn, $_GET['title']);
    $query .= " AND t1.title = '{$title}'";
}

if (isset($_GET['category'])) {
    $category = mysqli_real_escape_string($conn, $_GET['category']);
    $query .= " AND t1.category = '{$category}'";
}

if (isset($_GET['imageid'])) {
    $imageid = intval($_GET['imageid']);
    $query .= " AND t1.imageid = {$imageid}";
}

if (isset($_GET['isfavorite'])) {
    $isfavorite = intval($_GET['isfavorite']);
    $query .= " AND t1.isfavorite = {$isfavorite}";
}

$result = mysqli_query($conn, $query);

if (!$result) {
    die("Error retrieving tables: " . mysqli_error($conn));
}

$tables = array();
while ($row = mysqli_fetch_assoc($result)) {
    $tables[] = $row;
}

mysqli_free_result($result);
mysqli_close($conn);
echo json_encode($tables);
exit;
?>