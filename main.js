document.addEventListener("DOMContentLoaded" , function(){

    // save darkmode 
    let checkbox = document.getElementById("checkbox")

    checkbox.addEventListener("change" , function(){

        if (checkbox.checked === true) {
            localStorage.setItem("darkMode" , "enabled")
            document.body.classList.add("dark-mode")
        } else {
            localStorage.setItem("darkMode" , "disabled")
            document.body.classList.remove("dark-mode")
        }

    })

        // load dark-mode 
        if (localStorage.getItem("darkMode") === "enabled" ) {
            checkbox.checked = true 
            document.body.classList.add("dark-mode")
        }

})