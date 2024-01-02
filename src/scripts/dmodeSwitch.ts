const dmodeCheckbox = document.getElementById("dmode") as HTMLInputElement
dmodeCheckbox.addEventListener("input", () => {
    if (document.getElementById("dmode").checked) {
        document.querySelector("body")?.classList.replace("light", "dark")
    } else {
        document.querySelector("body")?.classList.replace("dark", "light")
    }
});

