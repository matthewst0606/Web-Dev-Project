<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Social Media</title>
    <link rel="stylesheet" href="../CSS/reset.css">
    <link rel="stylesheet" href="../CSS/login.css">

</head>
<body>
    <header>
        <h1>Post Cards</h1>
        <nav id="topnav">
            <ul class="tabcontainer">
                <li class="tab"><a href="#" class="btn">about <img src="../icons/info-circle-2.svg" alt=""></a></li>
                <li class="tab"><a href="#" class="btn">help <img src="../icons/help-circle-2.svg" alt=""></a></li>
            </ul>
        </nav>
    </header>


    <main>
        <section id="maincontent" class="activePage">
            <form action="../../app/registerhelper.php" method="post">
                <section class="form-section">
                    <input type="text" required="" name="username" id="username" placeholder="username" class="form-details">
                    <input type="email" required="" name="email" id="email" placeholder="email" class="form-details">
                    <input type="password" required="" name="password" id="password" placeholder="password" class="form-details">
                </section>
                <section class="submit-section">
                    <input type="submit" name="register" value="register" class="submit-details">
                </section>
            </form>
        </section>
    </main>


</body>
</html>