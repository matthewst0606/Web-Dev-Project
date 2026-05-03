<?php
session_start();

if (!isset($_SESSION['id'])) {
    header("Location: ../public/HTML/login.php");
    exit();
}

$postId = $_POST['post_id'] ?? null;
$commentText = $_POST['comment_text'] ?? "";

if (!$postId || trim($commentText) === "") {
    header("Location: ../public/HTML/main.php");
    exit();
}

require __DIR__ . "/db_connect.php";


$stmt = $pdo->prepare(
    "INSERT INTO comment (post_id, user_id, content) VALUES (?, ?, ?)"
);

$stmt->execute([
    $postId,
    $_SESSION['id'],
    $commentText
]);

header("Location: ../public/HTML/main.php");
exit();
?>