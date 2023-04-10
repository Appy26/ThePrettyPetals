const cont = document.getElementById("nav-third-div");
// Checking if signedIn
signedIn()
function signedIn() {
    let signedIn = localStorage.getItem("signedIn");

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


// Search input part
Search();
function Search() {
    let search = document.getElementById("inp");
    let btn = document.getElementById("searchBtn");

    btn.addEventListener("click",()=>{
        localStorage.setItem("search",JSON.stringify(search.value));
    })
}

const url = `https://the-pretty-petals-backend.onrender.com/`;
let userData = JSON.parse(localStorage.getItem("user"));

createDOM();
createDOM2();

function createDOM() {
    let cont = document.getElementById("first-cont");
    cont.innerHTML = `<div>
    <h3>User Detais</h3>
    <p><span class="name">Name:- </span><span class="span">${userData.firstName} ${userData.lastName}</span></p>
    <p><span class="name">E-mail:- </span><span class="span">${userData.email}</span></p>
    </div>
    <div id="log-out">Sign out</div>`
}
async function createDOM2() {

    let cont2 = document.getElementById("order-history");
    let req = await fetch(`${url}register/${userData.id}`);
    let res = await req.json();
    let data = res.ordered;

    if(!data || data.length == 0){
        cont2.innerHTML = `<h2>No Items to show here</h2>`
        return;
    }

    cont2.innerHTML = data.map(el=>{
        return `<div id="card">
        <div id="img">
            <img src="${el.image}">
        </div>
        <div>
            <h3 id="name">${el.name}</h3>
            <p>${el.price}</p>
            <div id="delivered">Delivered Successfully</div>
        </div>
    </div>`
    }).join("");
    
}

// Logout Functionality
document.getElementById("log-out").addEventListener("click",()=>{

    if(window.confirm("Are you Sure, You Want to Sign Out?")){
        // action you want to perform
        localStorage.clear("signedIn");
        localStorage.clear("user");
        localStorage.clear("product");
        localStorage.clear("search");
        localStorage.clear("product_details");
        window.open(`./index.html`,"_self")
    }
});