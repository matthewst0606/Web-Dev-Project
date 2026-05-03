<?php

// Checks if a file was actually sent from the form
if (!isset($_FILES["uploadFile"])) 
    exit("No file was sent.");
// Checks if PHP detected an upload error
else if ($_FILES["uploadFile"]["error"] !== UPLOAD_ERR_OK) 
    exit("Upload failed with error code: " . $_FILES["uploadFile"]["error"]);

$uploadDir = __DIR__ . "/../public/uploads/"; // Sets the upload folder path
$fileName = basename($_FILES["uploadFile"]["name"]); // Gets the original file name safely
$destination = $uploadDir . $fileName; // Creates the full destination path for the uploaded file

// Makes sure the uploads folder exists
if (!is_dir($uploadDir)) 
    exit("Upload folder does not exist: " . $uploadDir);

// Makes sure the temporary uploaded file actually exists
if (!is_uploaded_file($_FILES["uploadFile"]["tmp_name"])) 
    exit("Temporary uploaded file is missing.");

// Moves the uploaded file from the temporary folder into the uploads folder
if (!move_uploaded_file($_FILES["uploadFile"]["tmp_name"], $destination)) 
    exit("Failed to move uploaded file to: " . $destination);


// Starts the session so the logged-in user's id can be accessed
session_start();
$userId = $_SESSION['id'];

// If there is no logged-in user, stop the program
if (!isset($_SESSION['id'])) exit();

$format = "image";
$content = "uploads/" . $fileName;

// Gets the description from the form, or uses an empty string if none was entered
$description = $_POST["uploadDesc"] ?? "";

// Connects to the PostgreSQL database
require __DIR__ . "/db_connect.php";

// Prepares the SQL statement for adding a new post
$stmt = $pdo->prepare("
    INSERT INTO post (user_id, format, content, description) 
    VALUES (?, ?, ?, ?)
");

// Runs the SQL statement using the post values
$stmt->execute([$userId, $format, $content, $description]);

// Sends  user back to the main page
header("Location: ../public/HTML/main.php");
exit();
?>

