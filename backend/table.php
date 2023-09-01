<?php
include('db.php');

$selectedTable = $_GET['tablename'];

$query = "SELECT * FROM $selectedTable";
$result = mysqli_query($conn, $query);

if (!$result) {
    die("Error retrieving table contents: " . mysqli_error($conn));
}

$rows = array();
while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}

mysqli_free_result($result);
mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        .container {
            padding: 20px;
            width: 80%;
            margin: 0 auto;
        }

        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <div class="container">
        
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Notes</th>
            </tr>
            <?php foreach ($rows as $row) : ?>
                <tr>
                    <td><?php echo $row['id']; ?></td>
                    <td><?php echo $row['name']; ?></td>
                    <td><?php echo $row['email']; ?></td>
                    <td><?php echo $row['notes']; ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
    </div>
</body>
</html>
