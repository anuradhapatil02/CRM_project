// ===== LOGIN FUNCTION =====
function loginUser() {

    var role = document.getElementById("role").value;

    if(role === "admin"){
        window.location.href = "admin.html";
    }
    else if(role === "counselor"){
        window.location.href = "counselor.html";
    }
    else{
        alert("Please select role!");
    }
}


// ===== REGISTER FUNCTION =====
function registerUser() {
    alert("Registration Successful! Please Login.");
    window.location.href = "login.html"; // changed to login page
}

