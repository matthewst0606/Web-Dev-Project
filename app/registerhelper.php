<?php
session_start();

if (isset($_POST['register'])) {

    require __DIR__ . "/db_connect.php";



    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    

    if (str_contains($username, " ")) {
        header("Location: ../public/HTML/register.php");
        exit();
    }
    else if (str_contains($email, " ") || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: ../public/HTML/register.php");
        exit();
    }
    else if (str_contains($password, " ")) {
        header("Location: ../public/HTML/register.php");
        exit();
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?) RETURNING user_id"
    );

    $stmt->execute([$username, $email, $hashedPassword]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);




    if ($user) {
        $profileStmt = $pdo->prepare(
            "INSERT INTO userProfile (user_id, bio, pfp) VALUES (?, ?, ?)"
        );

        $profileStmt->execute([
            $user['user_id'],
            "no bio yet.",
            "icons/profile-circle-2.svg"
        ]);

        $_SESSION['loggedin'] = true;
        $_SESSION['id'] = $user['user_id'];
        $_SESSION['username'] = $username;
        header("Location: ../public/HTML/main.php");
        exit();
    }
}



?>