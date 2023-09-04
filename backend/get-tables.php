<?php
include('db.php'); 


$query =<<<EOF
SELECT
t1.*,
t2.imageUrl
FROM tables t1 
LEFT JOIN images t2 ON (t1.`imageid`=t2.`id`)
EOF;


if(isset($_GET['imageid']) && isset($_GET['category'])){
    $imageid = intval($_GET['imageid']);
    $category = mysqli_real_escape_string($conn, $_GET['category']);

    
    $query .= " WHERE imageid = ? AND category = ?";
    
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("is", $imageid, $category);
}
elseif(isset($_GET['category'])){
    $category = mysqli_real_escape_string($conn, $_GET['category']);
    $query .= " WHERE category = ?";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $category);
}
elseif(isset($_GET['imageid'])){
    $imageid = intval($_GET['imageid']);
    $query .= " WHERE imageid = ?";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $imageid);
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
