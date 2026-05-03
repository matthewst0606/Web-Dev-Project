class User {
    constructor(username, user_id) {
        this.username = username;
        this.user_id = user_id;     
    }


    displayItem() {
        const li = document.createElement("li");


        const article = document.createElement("article");
        article.classList.add("user-box");


        const user = document.createElement("h3");
        user.classList.add("user-box-username");
        user.textContent = this.username;


        const id = document.createElement("p");
        user.classList.add("user-box-id");

        id.textContent = this.user_id;

        const button = document.createElement("button");
        user.classList.add("user-box-btn");

        button.type = "button";
        button.textContent = "follow";
        

        article.append(user, id, button);


        li.appendChild(article);
        return li;
    }




}


