<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

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

// Get the raw GET data
$sname = $_GET['sname'];
$rno = $_GET['rno'];

// Prepare and bind
$stmt = $conn->prepare("SELECT * FROM student WHERE sname = ? AND rno = ?");
$stmt->bind_param("si", $sname, $rno);

// Execute the query
$stmt->execute();
$result = $stmt->get_result();

$students = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $students[] = $row;
    }
}
echo json_encode($students);

// Close the connection
$conn->close();
?>








