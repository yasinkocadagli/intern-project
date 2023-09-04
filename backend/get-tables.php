<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
include('db.php'); 

$query =<<<EOF
SELECT
t1.*,
t2.imageUrl
FROM tables t1 
LEFT JOIN images t2 ON (t1.`imageid`=t2.`id`)
EOF;


if(isset($_GET['imageid']) && isset($_GET['category'])){
    $imageid=$_GET['imageid'];

    $query.=" WHERE imageid='{$imageid}'";

}

elseif(isset($_GET['category'])){
    $category=$_GET['category'];

    $query.=" WHERE category='{$category}'";

}
elseif(isset($_GET['imageid'])){
    $imageid=$_GET['imageid'];

    $query.=" WHERE imageid='{$imageid}'";

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