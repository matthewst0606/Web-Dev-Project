// -------------- post class --------------
class Post {
    constructor(photo, description, postId) {
        this.photo = photo;
        this.description = description;
        this.postId = postId;
    }


    // -------------- display post photo --------------
    displayPhoto() {
        let img = document.createElement("img");
        img.classList.add("mainPhoto");
        img.src = this.photo;
        img.alt = "Post image";

        return img;
    }

     // -------------- display post description --------------
    displayDescription() {
        let figcaption = document.createElement("figcaption");
        figcaption.classList.add("description");
        figcaption.textContent = this.description;

        return figcaption;
    }

    // -------------- display post interaction elements --------------
    displayInteractions() {
        let ul = document.createElement("ul");
        ul.classList.add("interact");

        for (let i = 0; i < icons.length; i++) {
            let li = icons[i].displayIcon();
            ul.appendChild(li);
        }

        return ul;
    }

    // -------------- display entire post --------------
    displayPost() {
        let article = document.createElement("article");
        article.classList.add("post");

        let figure = document.createElement("figure");
        figure.classList.add("figContainer");

        let img = this.displayPhoto();
        let figcaption = this.displayDescription();
        let ul = this.displayInteractions();

        let commentSection = new CommentForm(this.postId);
        let commentsContainer = commentSection.displayCommentsContainer();
        let commentForm = commentSection.displayForm();


        figure.append(img, figcaption);
        article.append(figure, ul, commentsContainer, commentForm);

        return article;
    }





}
