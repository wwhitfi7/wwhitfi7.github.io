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

if (localStorage.getItem('darkMode') == 'enabled') {
    bdy?.classList.replace("light", "dark");
    dmodeCheckbox.checked = true;
} else {
    bdy?.classList.replace("dark", "light");
    dmodeCheckbox.checked = false;
}
