const dmodeCheckbox = document.getElementById("dmode") as HTMLInputElement
const bdy = document.querySelector("body")
dmodeCheckbox.addEventListener("input", () => {
    if (document.getElementById("dmode").checked) {
        bdy?.classList.replace("light", "dark");
        localStorage.setItem("darkMode", "enabled");
    } else {
        bdy?.classList.replace("dark", "light");
        localStorage.setItem("darkMode", "disabled");
    }
});
