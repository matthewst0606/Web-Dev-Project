class Settings {

    editListener(button, dropdown, options) {
        button.addEventListener("click", (event) => {
            dropdown.classList.toggle("hidden");
            button.classList.toggle("active");

            let existingForm = dropdown.querySelector(".btn-edit-form");
            if (existingForm) {
                existingForm.remove();
                return;
            }


            let form = document.createElement("form");
            form.classList.add("btn-edit-form");
            form.method = "post";
            form.action = "../../app/editSettings.php";

            let input = document.createElement("input");
            input.type = options.type;
            input.name = options.name;
            input.classList.add(options.inputClass);


            if (options.placeholder) // if placeholder exists
                input.placeholder = options.placeholder;
            
            if (options.enctype) // if enctype exists
                form.enctype = options.enctype;
            


            let submitBtn = document.createElement("button");
            submitBtn.type = "submit";
            submitBtn.textContent = options.submitText;
            submitBtn.classList.add("description-save-btn");


            form.append(input, submitBtn);
            dropdown.appendChild(form);
        });
    }

    displaySettings() {
        // get settings buttons from settings.php
        let settingsBtn = document.querySelectorAll(".settings-btn");


        // -----change profile photo----- 
        let editPfp = settingsBtn[0];
        let pfpDropdown = document.createElement("div");
        let pfpOptions = {
            type: "file",
            name: "profilePhoto",
            inputClass: "pfp-edit-input",
            submitText: "save",
            enctype: "multipart/form-data"
        };

        pfpDropdown.classList.add("edit-dropdown", "hidden");
        editPfp.parentElement.appendChild(pfpDropdown);

        
        // -----change bio-----
        let editBio = settingsBtn[1];
        let bioDropdown = document.createElement("div");
        let bioOptions = {
            type: "text",
            name: "bio",
            placeholder: "new bio",
            inputClass: "bio-edit-input",
            submitText: "save"
        };

        bioDropdown.classList.add("edit-dropdown", "hidden");
        editBio.parentElement.appendChild(bioDropdown);


        // -----delete account-----
        let deleteAccount = settingsBtn[2];
        let deleteDropdown = document.createElement("div");
        let deleteOptions = {
            type: "hidden",
            name: "deleteAccount",
            inputClass: "bio-edit-input",
            submitText: "Delete Account?"
        };
        
        deleteDropdown.classList.add("edit-dropdown", "hidden");
        deleteAccount.parentElement.appendChild(deleteDropdown);

        // ----- call event listener -----
        this.editListener(editPfp, pfpDropdown, pfpOptions);
        this.editListener(editBio, bioDropdown, bioOptions);
        this.editListener(deleteAccount, deleteDropdown, deleteOptions);
    }
}