class Icons {
    constructor(icon, iconAlt, iconClass) {
        this.icon = icon;
        this.iconAlt = iconAlt;
        this.iconClass = iconClass;
    }

    // display each icon
    displayIcon() {
        let img = document.createElement("img");
        let a = document.createElement("a");
        let li = document.createElement("li");

        img.src = this.icon;
        img.alt = this.iconAlt;

        this.labelIcon(li);

        a.appendChild(img);
        li.appendChild(a);
        return li;
    }

    // label the class of each icon
    labelIcon(li) {
        li.classList.add(this.iconClass);
    }

    
}
