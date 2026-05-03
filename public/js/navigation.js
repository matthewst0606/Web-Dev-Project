
class NavIcon {
   constructor(icon, icon_alt, iconId) {
      this.icon = icon;
      this.icon_alt = icon_alt;
      this.iconId = iconId;
   }

   // display each icon
    displayNav() {

        let img = document.createElement("img");
        let a = document.createElement("a");
        let li = document.createElement("li");

        img.src = this.icon;
        img.alt = this.icon_alt;

        this.labelTabs(li, a);
        a.appendChild(img);
        li.appendChild(a);
        return li; 
    }

    // label the class of each icon
    labelTabs(li, a) {
        li.classList.add("tab");
        li.id = this.iconId;
        a.classList.add("btn");

        if (this.iconId === "home-tab") li.classList.add("active");

    }
} 


// handles clicking behavior on a post
class TabInteract {
    constructor(ul) { ul.addEventListener("click", this); }

    handleEvent(e) {
        let li = e.target.closest(".tab");

        if (!li) return;        

        const action = {
            "friends-tab": () => this.page(li, document.querySelector("#friends-page")),
            "post-tab": () => this.page(li, document.querySelector("#post-page")),
            "home-tab": () => this.page(li, document.querySelector("#home-page")),
            "notifications-tab": () => this.page(li, document.querySelector("#notifications-page")),
            "profile-tab": () => this.page(li, document.querySelector("#profile-page"))
        };

        if (action[li.id]) action[li.id]();
    }


    page(li, section) {
        let current = document.querySelector(".active");
        let page = document.querySelector(".activePage");

        if (current && page) {
            current.classList.remove("active");
            page.classList.remove("activePage");
            page.classList.add("hidden");
        }

        li.classList.add("active");
        section.classList.remove("hidden");
        section.classList.add("activePage");
    }


    post(li) {
        let current = document.querySelector(".active");
        if (current) current.classList.remove("active");
        li.classList.add("active");
        
    }

    home(li) {
       let current = document.querySelector(".active");
        if (current) current.classList.remove("active");
        li.classList.add("active");
    }

    notifications(li) {
       let current = document.querySelector(".active");
        if (current) current.classList.remove("active");
        li.classList.add("active"); 
    }

    profile(li) {
       let current = document.querySelector(".active");
        if (current) current.classList.remove("active");
        li.classList.add("active");
    }
}


