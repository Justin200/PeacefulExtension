import "./panel.css";
import "./panel.html";

class Panel {
    constructor() {
        this.setEventListeners();
    }

    setEventListeners() {
        document.getElementById("start-button").addEventListener("click", () => {
            alert("start button running");
        });

        document.getElementById("reset-button").addEventListener("click", () => {
            alert("start button running");
        });
    }

}