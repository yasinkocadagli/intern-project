<?php
include('db.php');

$query = "SELECT users.*, users_pp_image.imageUrl
FROM users
LEFT JOIN users_pp_image ON users.imageid = users_pp_image.id
WHERE 1";


if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    if ($id > 0) {
        $query .= " AND users.id = $id";
    }
}


if (isset($_GET['email'])) {
    $email = mysqli_real_escape_string($conn, $_GET['email']);
    $query .= " AND users.email = '$email'";
}


if (isset($_GET['password'])) {
    $password = mysqli_real_escape_string($conn, $_GET['password']);
    $query .= " AND users.password = '$password'";
}

$result = mysqli_query($conn, $query);

if (!$result) {
    die("Error retrieving filtered user data: " . mysqli_error($conn));
}

$filteredUsersData = array();
while ($row = mysqli_fetch_assoc($result)) {
    $filteredUsersData[] = $row;
}

mysqli_free_result($result);
mysqli_close($conn);

header('Content-Type: application/json');
echo json_encode($filteredUsersData);


