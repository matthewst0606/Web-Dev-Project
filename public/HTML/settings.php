


<!-- edit profile
    profile photo
    delete acocunt
    add bio
    change details
    

-->




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>



    <link rel="stylesheet" href="../CSS/reset.css">
    <link rel="stylesheet" href="../CSS/main.css">
</head>
<body>

    <header class="top-header">
        <h1>Post Cards</h1>

        <nav id="topnav">
            <ul class="tabcontainer back-tabcontainer">
                <li class="tab back-tab">
                    <a href="main.php" class="btn back-btn">back to profile</a>
                </li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="activePage" id="settings-page">

            <article class="article-box settings-card">
                <h2 class="title">Profile Settings</h2>

                <ul class="settings-options">
                    <li class="tab settings-tab">
                        <button class="btn settings-btn" id="edit-pfp-button">Change Profile Photo</button>
                    </li>
                    <li class="tab settings-tab">
                        <button class="btn settings-btn" id="edit-bio-button">Change Bio</button>
                    </li>
                    <li class="tab settings-tab">
                        <button class="tab settings-btn" id="delete-account-button">Delete Account</button>
                    </li>
                </ul>
            </article>
        </section>
    </main>

    <script src="../js/settings.js"></script>
    <script>
        const settings = new Settings();
        settings.displaySettings();
    </script>
</body>
</html>