<?php
$errorMessage = "";

if (isset($_GET["error"])) {
    if ($_GET["error"] === "password") $errorMessage = "Incorrect password."; 
    elseif ($_GET["error"] === "username") $errorMessage = "Username not found.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post Cards</title>
    <link rel="stylesheet" href="../CSS/reset.css">
    <link rel="stylesheet" href="../CSS/main.css">
    <link rel="stylesheet" href="../CSS/login.css">


</head>
<body>

    <header class="top-header">
        <h1>social media</h1>
        <nav id="topnav">
            <ul class="tabcontainer">
                <li class="tab"><a href="#" class="btn">about <img src="../icons/info-circle-2.svg" alt=""></a></li>
                <li  class="tab"><a href="#" class="btn">help <img src="../icons/help-circle-2.svg" alt=""></a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="activePage" id="login-page">
            <section id="maincontent">

                <!-- display error message if username or password is incorrect -->
                <?php if ($errorMessage !== ""): ?>
                    <p class="error-message"><?php echo $errorMessage; ?></p>
                <?php endif; ?>

                <form action="../../app/loginhelper.php" method="post">
                    <section class="form-section">
                        <!-- enter username -->
                        <input type="text" required="" 
                            name="username" id="username" 
                            placeholder="username" class="form-details"
                        >
                        <!-- enter password -->
                        <input type="password" required="" 
                            name="password" id="password" 
                            placeholder="password" class="form-details"
                        >
                    </section>

                    <!-- submit -->
                    <section class="submit-section">
                        <input type="submit" name="login" 
                               value="login" class="submit-details" id="login"
                        >
                        <button class="submit-details" id="register">
                            <a href="register.php">register</a>
                        </button>
                    </section>
                </form>
            </section>
        </section>
    </main>
</body>
</html>