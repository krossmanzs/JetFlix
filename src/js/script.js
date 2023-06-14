const nav = document.getElementById("navbar")

window.onscroll = function() {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ) {
        nav.classList.add("nav-colored")
        nav.classList.remove("nav-transparent")
    } else {
        nav.classList.add("nav-transparent")
        nav.classList.remove("nav-colored")
    }
}

function toggleMenu() {
    nav.classList.toggle("responsive")
}

function validateEmail() {
    window.location.href = "./signup.html"
    return false
}

function validateForm(form) {
    if(form.email.value == "") {
        alert("Please provide your full name")
        return false
    }
    
    if (form.password.value == "") {
        alert("Please provide your password")
        return false
    }
    
    if (form.passwordconfirm.value == "") {
        alert("Please confirm your password")
        return false
    } else if (form.passwordconfirm.value != form.password.value) {
        alert("Your confirmation password doesnt match with your password!")
        return false
    }

    if (form.bod.value == "") {
        alert("Please provide your birth of date!")
        return false    
    }

    if (form.gender.value == "") {
        alert("Please select your gender")
        return false
    }

    if (!form.tos.checked) {
        alert("You must agree our ToS!")
        return false
    }

    confirm("Your request success, thank you for you effort!")
}