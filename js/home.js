// Test
function initHome(){
    const clickMe = document.getElementById('clickMeButton');
    if (clickMe) {
        clickMe.addEventListener('click',  ()=> {
            alert('Bruh!!, you just lost the game');
        });
    }

    const home = document.getElementById('homeButton');
    if (home) {
        home.addEventListener("click", (e) => {
            if (e.target.closest("#homeButton")) {
                window.location.href = "https://cshark.dk/";
            }
        });
    }
}

