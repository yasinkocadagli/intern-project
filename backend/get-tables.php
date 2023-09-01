<?php
include('db.php'); 

$query =<<<EOF
SELECT
t1.*,
t2.imageUrl
FROM tables t1 
LEFT JOIN images t2 ON (t1.`imageid`=t2.`id`)
EOF;



if(isset($_GET['category'])){
    $category=$_GET['category'];

    $query.=" WHERE category='{$category}'";

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


