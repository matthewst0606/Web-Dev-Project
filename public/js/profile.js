


class ProfilePost extends Post {

    postIdInput() {        
        let input = document.createElement("input");
        input.type = "hidden";
        input.name = "post_id";
        input.value = this.postId;  
        return input;      
    }


    editBtnListener(editBtn, dropdown) {
        editBtn.addEventListener("click", function () {
            dropdown.classList.toggle("hidden");
            editBtn.classList.toggle("active");
        });
    }

    deletePostListener(deletePost, options) {
        deletePost.addEventListener("click", () => {
            let form = document.createElement("form");
            form.method = "post";
            form.action = options.formAction;

            let input = this.postIdInput();

            form.appendChild(input);

            document.body.appendChild(form);
            form.submit();
        });
    }

    editDescriptionListener(editDescription, dropdown, deletePost, options) {
        editDescription.addEventListener("click", () => {
            // -------------- check for existing form --------------
            let existingForm = dropdown.querySelector(".description-edit-form");
            if (existingForm) {
                existingForm.remove();
                return;
            }
            // -------------- create form --------------
            let form = document.createElement("form");
            form.classList.add(options.formClass);
            form.method = "post";
            form.action = options.formAction;

            // -------------- get the users id --------------
            let idInput = this.postIdInput();

            // -------------- input for description --------------
            let input = document.createElement("input");
            input.type = options.inputType;
            input.name = options.inputName;
            input.placeholder = options.inputPlaceholder;
            input.classList.add(options.inputClass);

            // -------------- submit button --------------
            let submitBtn = document.createElement("button");
            submitBtn.type = options.submitType;
            submitBtn.textContent = options.submitText;
            submitBtn.classList.add(options.submitClass);




            form.append(idInput, input, submitBtn);





            dropdown.insertBefore(form, deletePost);
            input.focus();
        });
    }



    displayProfilePost() {
        // --------------  creates the post and its border -------------- 
        let article = document.createElement("article");
        article.classList.add("postPreview");

        let figure = document.createElement("figure");
        figure.classList.add("figContainer");

        let img = this.displayPhoto();


        // --------------  creates dropdown menu -------------- 
        let editBtn = document.createElement("button");
        editBtn.textContent = "edit post";
        editBtn.classList.add("edit-post-btn");

        let dropdown = document.createElement("div");
        dropdown.classList.add("edit-dropdown", "hidden");
        this.editBtnListener(editBtn, dropdown);



        // -------------- deletepost option -------------- 
        let deletePost = document.createElement("button");
        let deleteOptions = {
            formAction: "../../app/deletepost.php",
        };
        deletePost.textContent = "delete post";
        deletePost.classList.add("delete-post-btn");

        this.deletePostListener(deletePost, deleteOptions);


        // --------------  edit desc option -------------- 
        let editDescription = document.createElement("button");
        let descOptions = {
            formClass: "description-edit-form",
            formAction: "../../app/editdescription.php",

            inputType: "text",
            inputName: "description",
            inputPlaceholder: "New Description",
            inputClass: "description-edit-input",

            submitText: "Save",
            submitType: "submit",
            submitClass: "description-save-btn"
        };

        editDescription.textContent =  "Edit Description";
        editDescription.classList.add("edit-description-btn");
        this.editDescriptionListener(editDescription, dropdown, deletePost, descOptions);



        dropdown.append(editDescription, deletePost);
        figure.append(img);
        article.append(figure, editBtn, dropdown);

        return article;
    }    
}






class Stats {
    constructor(label, count, id) {
        this.label = label;
        this.count = count;
        this.id = id;
    }

    displayStat() {
        const li = document.createElement("li");
        li.classList.add("banner-tab");

        const a = document.createElement("a");
        a.href = "#";
        a.classList.add("btn");
        a.textContent = this.label;

        const p = document.createElement("p");
        p.classList.add("count");
        p.id = this.id;
        p.textContent = this.count;

        li.append(a, p);

        return li;
    }
}