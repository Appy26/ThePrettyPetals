

// Checking if signedIn
signedIn()
function signedIn() {
    let btn1 = document.createElement("button");
    btn1.setAttribute("id", "loginBtn");
    btn1.setAttribute("onclick", "location.href=`./loginPage.html`");

    let btn2 = document.createElement("button");
    btn2.setAttribute("id", "registerBtn");
    btn2.setAttribute("onclick", "location.href=`./registerPage.html`");

    btn1.innerText = "Login";
    btn2.innerText = "Register";

    document.getElementById("nav-third-div").style.marginRight = "7%"

    document.getElementById("nav-third-div").append(btn1,btn2);
}

function signedIn2() {
    
}