
// ------------------ display top navigation --------------------
function displayTopNav() {
    const topnav = document.getElementById("topnav");
    const ul = document.querySelector(".tabcontainer");

    for (let i = 0; i < topNav.length; i++) {
        let li = topNav[i].displayNav();
        ul.appendChild(li);
    }

    new TabInteract(topnav);
}

// ------------------ display main posts --------------------
function displayMainPosts() {
    const mainContent = document.getElementById("maincontent");

    for (let i = 0; i < dbPosts.length; i++) {
        let post = new Post(
            "../" + dbPosts[i].content,
            dbPosts[i].description,
            dbPosts[i].post_id
        );

        let article = post.displayPost();
        let commentsContainer = article.querySelector(".comments-container");
        let postComments = dbComments.filter(comment => comment.post_id == dbPosts[i].post_id);

        for (let j = 0; j < postComments.length; j++) {
            let comment = new Comment(
                "../icons/profile-circle-2.svg",
                postComments[j].username,
                postComments[j].content
            );
            commentsContainer.appendChild(comment.displayComment());
        }
        mainContent.appendChild(article);
    }
}


// ------------------ display profile posts --------------------
function displayProfilePosts() {
    const profilePosts = document.getElementById("profile-posts");
    profilePosts.innerHTML = "";

    for (let i = 0; i < userPosts.length; i++) {
        let post = new ProfilePost(
           "../" + userPosts[i].content,
            userPosts[i].description,
            userPosts[i].post_id
        );

        let article = post.displayProfilePost();
        profilePosts.appendChild(article);
    }
}


// ------------------ display profile stats --------------------
function displayProfileStats() {
    const list = document.querySelector(".banner-container");
    if (!list) return;
    list.innerHTML = "";

    for (let i = 0; i < profileStats.length; i++) {
        let li = profileStats[i].displayStat();
        list.appendChild(li);
    }
    document.getElementById("posts-count").textContent = userPosts.length;
}

function displayUsers() {
    const usersList = document.querySelector(".users-list");

    for (let i = 0; i < dbUsers.length; i++) {
        let user = new User(
            dbUsers[i].username,
            dbUsers[i].user_id,
        );

        let li = user.displayItem();
        usersList.appendChild(li);
    }
}




// ----- calling functions -----
displayTopNav();
displayMainPosts();
displayProfilePosts();
displayProfileStats();
displayUsers();

new Interact(document.getElementById("maincontent"));




