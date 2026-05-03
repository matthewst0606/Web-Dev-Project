
// represents one comment
class Comment {
    constructor(pfp, username, contents) {
        this.pfp = pfp;
        this.username = username;
        this.contents = contents;
    }

    displayPfp() {
        let img = document.createElement("img");
        img.classList.add("pfp");
        img.src = this.pfp;
        return img;
    }

    displayUsername() {
        let span = document.createElement("span");
        span.classList.add("username");
        span.textContent = this.username;
        return span;
    }

    displayContents() {
        let p = document.createElement("p");
        p.classList.add("contents");
        p.textContent = this.contents;
        return p;
    }


    displayComment() {
        let article = document.createElement("article");
        article.classList.add("commentSection");

        let topRow = document.createElement("section");
        topRow.classList.add("commentTopRow");

        let img = this.displayPfp();
        let span = this.displayUsername();
        let p = this.displayContents();

        topRow.append(img, span);
        article.append(topRow, p);

        return article;
    }
}



class CommentForm {
    constructor(postId) {
        this.postId = postId;
    }

    displayCommentsContainer() {
        let commentsContainer = document.createElement("section");
        commentsContainer.classList.add("comments-container", "hidden");

        return commentsContainer;
    }

    displayForm() {

        let form = document.createElement("form");
        form.classList.add("comment-form", "hidden");
        form.action = "../../app/comment.php";
        form.method = "post";

        let postIdInput = document.createElement("input");
        postIdInput.type = "hidden";
        postIdInput.name = "post_id";

        postIdInput.value = this.postId;

        let commentInput = document.createElement("input");
        commentInput.classList.add("searchbox");
        commentInput.type = "text";
        commentInput.name = "comment_text";
        commentInput.placeholder = "add a comment";

        let submit = document.createElement("button");
        submit.classList.add("submit-details", "comment-submit");
        submit.type = "submit";
        submit.textContent = "Comment";

        form.append(postIdInput, commentInput, submit);
        return form;
    }

}