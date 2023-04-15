function validate(){
    var email = document.getElementById('mail').value;
    var icon = document.getElementById('error_icon');
    var text = document.getElementById('error_text');

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.match(validRegex)){
        alert("Valid Email");
        return true
    }
    else{
        document.getElementById("mail").style.borderWidth = "2px";
        document.getElementById("mail").style.borderColor = "var(--Soft_Red)";
        document.getElementById("mail").value = "";
        icon.style.display = "block";
        text.style.display = "block";
        return false
    }
}


