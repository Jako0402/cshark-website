function initDarkmode() {
    let darkmode = localStorage.getItem('darkmode')
    const themeSwitch = document.getElementById('theme-switch')

    if(themeSwitch) {
        themeSwitch.addEventListener("click", () => {
            darkmode = localStorage.getItem('darkmode')
            darkmode !== "active" ? enableDarkmode() : disableDarkmode()
            console.log("darkmode changed in")
        })
    }

    const enableDarkmode = () => {
        document.body.classList.add('darkmode')
        localStorage.setItem('darkmode', 'active')
        console.log("hey, who turned off the lights?")
    }

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode')
        localStorage.setItem('darkmode', null)
        console.log("MY EEEEYESSS")
    }

    if (darkmode === "active") {
        enableDarkmode()
        console.log("should be active")
    }
}