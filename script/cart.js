const CheckingIfLogIn = document.getElementById("nav-third-div");
// Checking if signedIn
signedIn()
function signedIn() {
    let signedIn = localStorage.getItem("signedIn");

    if(signedIn == "true"){
        CheckingIfLogIn.innerHTML = null;
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

        div1.append(img1);
        div2.append(img2);
        div3.append(img3);
        div4.append(img4);
        CheckingIfLogIn.append(div1,div2,div3,div4);
        
    } else {
        CheckingIfLogIn.innerHTML = null;
        let btn1 = document.createElement("button");
        btn1.setAttribute("id", "loginBtn");
        btn1.setAttribute("onclick", "location.href=`./loginPage.html`");

        let btn2 = document.createElement("button");
        btn2.setAttribute("id", "registerBtn");
        btn2.setAttribute("onclick", "location.href=`./registerPage.html`");

        btn1.innerText = "Login";
        btn2.innerText = "Register";

        CheckingIfLogIn.style.marginRight = "7%"

        CheckingIfLogIn.append(btn1,btn2);
    }
}


// Search input part
Search();
function Search() {
    let search = document.getElementById("inp");
    let btn = document.getElementById("searchBtn");

    btn.addEventListener("click",()=>{
        localStorage.setItem("search",JSON.stringify(search.value));
        btn.setAttribute("onclick","location.href=`./searchPage.html`")
    })
}


var user = JSON.parse(localStorage.getItem("user"));
const url = `https://jsson-testing.onrender.com/`;
var container = document.getElementById("card-items");
var Data;

fetchData();

async function fetchData() {
    let req = await fetch(`${url}register/${user.id}/`);
    let res = await req.json();
    Data = res.cart;
    createDOM(Data);
}


function createDOM(data) {
    
    if(!data){
        let h3 = document.createElement("h3");
        h3.innerText = "No Items to show here";
        container.append(h3);
        return;
    }
    container.innerHTML = null;

    data.forEach(el => {
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let img = document.createElement("img");
        let name = document.createElement("h3");
        let price = document.createElement("p");
        let imgDiv = document.createElement("div");
        let nameDiv = document.createElement("div");
        let quanDiv = document.createElement("div");
        let inc = document.createElement("button");
        let span = document.createElement("span");
        let dec = document.createElement("button");

        img.src = el.image;
        name.innerText = el.name.substr(0,40);
        price.innerText = `Price:- ${el.price}`;
        inc.innerText = "+";
        dec.innerText = "-";
        span.innerText = " 1 ";

        imgDiv.append(img);
        quanDiv.append(inc,span,dec);
        nameDiv.append(name,price,quanDiv);
        card.append(imgDiv,nameDiv);
        container.append(card);
    });
}