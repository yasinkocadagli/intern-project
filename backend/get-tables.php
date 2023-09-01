<?php
include('db.php'); 

$query = "SHOW TABLES FROM intern_proje";
$result = mysqli_query($conn, $query);

if (!$result) {
    die("Error retrieving tables: " . mysqli_error($conn));
}

$tables = array();
while ($row = mysqli_fetch_row($result)) {
    $tables[] = $row[0];
}

mysqli_free_result($result);
mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <style>
        .table-box {
            border: 1px solid #000;
            padding: 10px;
            margin: 10px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <h2>List of Tables:</h2>
    <?php foreach ($tables as $table) : ?>
        <a href="table.php?tablename=<?php echo $table; ?>">
            <div class="table-box"><?php echo $table; ?></div>
        </a>
    <?php endforeach; ?>
</body>
</html>
