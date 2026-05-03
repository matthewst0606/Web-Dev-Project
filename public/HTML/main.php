<?php
    session_start();

    if (!isset($_SESSION['id'])) {
        header("Location: login.php");
        exit();
    }

    require_once "../../app/mainhelper.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post Cards Home Page</title>
    <link rel="stylesheet" href="../CSS/reset.css">
    <link rel="stylesheet" href="../CSS/main.css">
    <link rel="stylesheet" href="../CSS/post.css">
    <link rel="stylesheet" href="../CSS/search.css">
    <link rel="stylesheet" href="../CSS/profile.css">
    <link rel="stylesheet" href="../CSS/upload.css">
    <link rel="stylesheet" href="../CSS/community.css">
    <link rel="stylesheet" href="../CSS/notification.css">

    <script src="../js/interact.js"></script>
    <script src="../js/icons.js"></script>
    <script src="../js/comment.js"></script>
    <script src="../js/post.js"></script>
    <script src="../js/profile.js"></script>

    <script src="../js/navigation.js"></script>
    <script src="../js/data.js"></script>
</head>

<body>
    <!------------------ top navigation --------------------->
    <header class="top-header">

        <h1>Post Cards</h1> 

        <!-- top navigation that holds tabs -->
        <nav id="topnav"><ul class="tabcontainer"></ul></nav>

        <!-- top nagivation that holds the searchbar + button -->
        <nav class="searchbar">
            <input type="text" placeholder="search" class="searchbox">
            <button class="searchbtn">
                <img src="../icons/search-3.svg" alt="search">
            </button>
        </nav>
    </header>


    <main>
        <!------------------ home section --------------------->
        <section id="home-page" class="activePage">
            <section id="maincontent"></section>
        </section>

        <!------------------ friends section --------------------->
        <section id="friends-page" class="hidden">
            <section id="card-container">

                <article class="users-card">
                    <h2 class="title">Find Friends</h2>
                    
                    <ul class="users-list"></ul>
                </article>

                <!----- friends box ------>
                <article class="friends-card">
                    <h2 class="title">Friends</h2>
                    <!-- list all friends -->
                    <ul class="friends-list"></ul>
                </article>
            </section>
        </section>
        
        <!------------------ upload post section --------------------->
        <section id="post-page" class="hidden">
            <article class="article-box form-section">
                <h2 class="title">Upload</h2>
                
                <!-- form for uploading a post -->
                <form action="../../app/upload.php" method="post" enctype="multipart/form-data">

                    <!-- for uploading images & adding description to post -->
                    <input type="file" id="uploadFile" name="uploadFile">
                    <input class="searchbox" type="text" id="description"
                           name="uploadDesc" maxlength="255" placeholder="Add Description."
                    >
                    <!-- submit the upload -->
                    <input type="submit" value="Upload" class="submit-details">
                </form>
            </article>
        </section>

        <!------------------ notifications section --------------------->
        <section id="notifications-page" class="hidden">
                <article class="article-box notifications-card">
                    <h2 class="title">Notifications</h2>

                    <!-- list all notifications if available -->
                    <ul class="notification-list"></ul>
                </article>
        </section>


        <!------------------ user profile section --------------------->
        <section id="profile-page" class="hidden">
            <section id="profile-banner">

                <!-- sections containing parts of banner -->
                <article class="banner-section">
                    <h2 class="title">profile</h2>
                    
                    <!-- pfp, username, & bio -->
                    <img id="pfp" 
                         src="<?php echo htmlspecialchars('../' . ($userProfile['pfp'] ?? 'icons/profile-circle-2.svg')); ?>" 
                         alt="pfp"
                    >
                    <p id="username">
                        <?php echo htmlspecialchars($_SESSION['username']); ?>
                    </p>
                    <p id="bio">
                        <?php echo htmlspecialchars($userProfile['bio'] ?? "no bio yet."); ?>
                    </p>
                    
                    <!-- settings button -->
                    <a href="settings.php" class="edit-profile-btn">edit profile</a>
                </article>
            

                <!-- displays followers, following, likes, posts -->
                <article class="tab-section">
                    <ul class="banner-container"></ul>
                </article>
            </section>

            <!-- displays the accounts posts -->
            <section id="profile-posts">


            </section>
        </section>
    </main>

    <!-- script to send details from DB to JS -->
    <script> 
        const dbPosts = <?php echo json_encode($posts); ?>; 
        const userPosts = <?php echo json_encode($profilePosts); ?>;
        const dbFriends = <?php echo json_encode($friends); ?>;
        const dbComments = <?php echo json_encode($comments); ?>;
        const dbUsers = <?php echo json_encode($users); ?>
    </script>

    <script src="../js/friends.js"></script>
    <script src="../js/notification.js"></script>
    <script src="../js/main.js"></script>
</body>
</html>