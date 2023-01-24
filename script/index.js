// Loader
document.onreadystatechange = function() {
if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".mesh-loader").style.visibility = "visible";
} else {
    document.querySelector(".mesh-loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
}
};
// Till here


const cont = document.getElementById("nav-third-div");
// Checking if signedIn
signedIn()
function signedIn() {
    let signedIn = localStorage.getItem("signedIn");
    let admin_signedin = localStorage.getItem("admin-signed");

    if(signedIn == "true"){
        cont.innerHTML = null;
        let div1 =document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");

        img1.src = "./Photos/bell.png";
        img2.src = "./Photos/user.png";
        img3.src = "./Photos/shopping-cart.png";
        img4.src = "./Photos/wishlist.png";
        div2.setAttribute("onclick", "location.href=`./userDashboard.html`");
        div3.setAttribute("onclick", "location.href=`./cartPage.html`");
        div4.setAttribute("onclick", "location.href=`./wishlist.html`");

        div1.append(img1);
        div2.append(img2);
        div3.append(img3);
        div4.append(img4);
        cont.append(div1,div2,div3,div4);
        
    } else {
        if(admin_signedin == "true"){
            cont.innerHTML = null;
            let div2 = document.createElement("div");

            let img2 = document.createElement("img");

            img2.src = "./Photos/user.png";

            div2.setAttribute("onclick", "location.href=`./admin.html`");

            div2.append(img2);
            cont.append(div2);
        } else{
            cont.innerHTML = null;
            let btn1 = document.createElement("button");
            btn1.setAttribute("id", "loginBtn");
            btn1.setAttribute("onclick", "location.href=`./loginPage.html`");

            let btn2 = document.createElement("button");
            btn2.setAttribute("id", "registerBtn");
            btn2.setAttribute("onclick", "location.href=`./registerPage.html`");

            btn1.innerText = "Login";
            btn2.innerText = "Register";

            cont.style.marginRight = "7%"

            cont.append(btn1,btn2);
        }
        
    }
}


// Search input part
Search();
function Search() {
    let search = document.getElementById("inp");
    let btn = document.getElementById("searchBtn");

    btn.addEventListener("click",()=>{
        localStorage.setItem("search",JSON.stringify(search.value));
    })
}