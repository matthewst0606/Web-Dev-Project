

<?php

session_start();

if (!isset($_SESSION['id'])) {
    header("Location: ../public/HTML/login.php");
    exit();
}
if (!isset($_POST['post_id']) || !isset($_POST['description'])) {
    header("Location: ../public/HTML/main.php");
    exit();
}  


$userId = $_SESSION['id'];
$postId = $_POST['post_id'];
$description = $_POST['description'];

require __DIR__ . "/db_connect.php";

$stmt = $pdo->prepare("UPDATE post SET description = ? WHERE post_id = ? AND user_id = ?");
$stmt->execute([$description, $postId, $userId]);

$_SESSION["return_to_profile"] = true;
header("Location: ../public/HTML/main.php");
exit();



?>