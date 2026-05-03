// handles clicking behavior on a post
class Interact {
    constructor(ul) { 
        ul.addEventListener("click", this); 
    }

    handleEvent(e) {
        let li = e.target.closest("li");
        if (!li) return;

        if (li.classList.contains("like")) this.like(li);
        else if (li.classList.contains("dislike")) this.dislike(li);
        else if (li.classList.contains("comment")) this.comment(li);
        else if (li.classList.contains("share")) this.share(li);
        else if (li.classList.contains("user")) this.user(li);
    }

    like(li) {
        li.classList.toggle("clicked");
        let post = li.closest(".post");
        let dislike = post.querySelector(".dislike");

        if (dislike) dislike.classList.remove("clicked");
    }

    dislike(li) {
        li.classList.toggle("clicked");
        let post = li.closest(".post");
        let like = post.querySelector(".like");

        if (like) like.classList.remove("clicked");
    }

    comment(li) {
        li.classList.toggle("clicked");  

        let post = li.closest(".post");
        if (!post) return;

        let form = post.querySelector(".comment-form");
        let comments = post.querySelector(".comments-container");

        if (form) form.classList.toggle("hidden");
        if (comments) comments.classList.toggle("hidden");
    }

    share(li) {
        li.classList.toggle("clicked");  
        // eventually add share options
    }

    user(li) {
        li.classList.toggle("clicked");  
        // eventually go to the uploaders profile
    }
}
