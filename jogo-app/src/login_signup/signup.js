function showPassword(){
    var x = document.getElementById("passwd");
    if (x.type == "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    {
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
}