<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root"; // your MySQL username
$password = ""; // your MySQL password
$dbname = "libratrack";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the raw POST data
$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $bookid = $data['bookid'];
    $bookname = $data['bookname'];
    $author = $data['author'];
    $edition = $data['edition'];

    $sql = "INSERT INTO books (bookid, bookname, author, edition) VALUES ('$bookid', '$bookname', '$author', '$edition')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "New record created successfully"]);
    } else {
        echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error]);
    }

    $conn->close();
}
?>