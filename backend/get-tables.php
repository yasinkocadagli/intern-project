<?php
include('db.php'); 

$query =<<<EOF
SELECT
t1.*,
t2.imageUrl
FROM tables t1 
LEFT JOIN images t2 ON (t1.`imageid`=t2.`id`)
EOF;

$stmt = null; 

if(isset($_GET['imageid']) && isset($_GET['category'])){
    
    $imageid = filter_var($_GET['imageid'], FILTER_SANITIZE_NUMBER_INT);
    $category = filter_var($_GET['category'], FILTER_SANITIZE_STRING);

    $query .= " WHERE imageid = ? AND category = ?";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("is", $imageid, $category);
}
elseif(isset($_GET['category'])){
    
    $category = filter_var($_GET['category'], FILTER_SANITIZE_STRING);
    $query .= " WHERE category = ?";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $category);
}
elseif(isset($_GET['imageid'])){
    
    $imageid = filter_var($_GET['imageid'], FILTER_SANITIZE_NUMBER_INT);
    $query .= " WHERE imageid = ?";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $imageid);
}

if (!$stmt) {
    die("Hazır ifade oluşturulurken bir hata oluştu: " . $conn->error);
}

$stmt->execute();
$result = $stmt->get_result();

if (!$result) {
    die("Error retrieving tables: " . mysqli_error($conn));
}

$tables = array();
while ($row = mysqli_fetch_assoc($result)) {
    $tables[] = $row;
}

$stmt->close();
$conn->close();
echo json_encode($tables);
exit;
?>
