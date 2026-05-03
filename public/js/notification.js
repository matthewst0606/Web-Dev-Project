class Notification {
    constructor(username, action, icon, timeText) {
        this.username = username;
        this.action = action;
        this.icon = icon;
        this.timeText = timeText;
    }

    displayNotification() {
        const li = document.createElement("li");

        const article = document.createElement("article");
        article.classList.add("notification-item");

        const header = document.createElement("header");
        header.classList.add("notification-header");

        const img = document.createElement("img");
        img.src = this.icon;
        img.alt = "notification icon";
        img.classList.add("notification-icon");

        const user = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = this.username;
        user.appendChild(strong);

        if (this.icon !== "") header.appendChild(img);
        

        header.appendChild(user);

        const body = document.createElement("section");
        body.classList.add("notification-body");

        const message = document.createElement("p");
        message.textContent = this.action;

        const time = document.createElement("time");
        const small = document.createElement("small");
        small.textContent = this.timeText;
        time.appendChild(small);

        body.append(message, time);

        article.append(header, body);
        li.appendChild(article);

        return li;
    }

    static displayNotificationList(notifications) {
        const list = document.querySelector(".notification-list");
        if (!list) return;

        list.innerHTML = "";

        if (!notifications || notifications.length === 0) {
            const empty = new Notification(
                "No notifications yet",
                "New activity will appear here.",
                "",
                ""
            );

            list.appendChild(empty.displayNotification());
            return;
        }

        notifications.forEach(notification => {
            const card = new Notification(
                notification.username,
                notification.action,
                notification.icon,
                notification.timeText
            );

            list.appendChild(card.displayNotification());
        });
    }
}