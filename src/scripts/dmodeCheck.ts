const dmodeCheckbox = document.getElementById("dmode") as HTMLInputElement
const bdy = document.querySelector("body")
if (localStorage.getItem('darkMode') == 'enabled') {
    bdy?.classList.replace("light", "dark");
    dmodeCheckbox.checked = true;
} else {
    bdy?.classList.replace("dark", "light");
    dmodeCheckbox.checked = false;
}
