// loader

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".mesh-loader").style.visibility = "visible";
    } else {
        document.querySelector(".mesh-loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
    };
// till here


// navigation bar
const CheckingIfLogIn = document.getElementById("nav-third-div");
// Checking if signedIn

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

        div2.setAttribute("onclick", "location.href=`./userDashboard.html`");
        div3.setAttribute("onclick", "location.href=`./cartPage.html`");
        div4.setAttribute("onclick", "location.href=`./wishlist.html`");

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
function Search() {
    let search = document.getElementById("inp");
    let btn = document.getElementById("searchBtn");

    btn.addEventListener("click",()=>{
        localStorage.setItem("search",JSON.stringify(search.value));
        btn.onclick="location.href=`./searchPage.html`";
    })
}

const url = `https://jsson-testing.onrender.com/`;
const cont = document.getElementById("search-results");
let searchKeyword = JSON.parse(localStorage.getItem("search"));
let Data; // 12 products of present page
let filterAppliedData; // testing purpose
let allData; // all data of products = 50
let isFilterApplied = false; // testing purpose

// All Data of API
fetch(`${url}products`).then(res=>res.json()).then(original=>allData = original);

// All Functions Calling
signedIn();
Search();
Sort();
pagination();
filter();

// Search Functionality
if(searchKeyword){
    searchResultCertainCondition()
} else {
    searchResult(1);
}

// Default Search Result
async function searchResult(i) {
    // let loader =document.getElementById("loader")
    // loader.style.display="block"
    let request = await fetch(`${url}products?_limit=12&_page=${i}`);
    let result = await request.json();
    Data = result;
    createDOM(result);
}

// If search input is given in homepage/indexPage
async function searchResultCertainCondition() {
    let request = await fetch(`${url}products`);
    let result = await request.json();
    Data = result;
    let newResult = result.filter(el=>{
        if(el.name.toLowerCase().includes(searchKeyword) || el.color.toLowerCase().includes(searchKeyword)){
            return true;
        }
        return false;
    });
    filterAppliedData = newResult;
    isFilterApplied = true;
    createDOM(newResult);
}

// Search Input functionality
document.getElementById("inp").addEventListener("keyup",(e)=>{
    let keyWord = e.target.value;
    let newResult = allData.filter(el=>{
        if(el.name.toLowerCase().includes(keyWord) || el.color.toLowerCase().includes(keyWord)){
            return true;
        }
        return false;
    });
    filterAppliedData = newResult;
    if(!keyWord){
        searchResult(1);
        return;
    }
    createDOM(newResult);
});

// Sorting Functionality
function Sort() {
    let H2L = document.getElementById("H2L");
    let L2H = document.getElementById("L2H");
    let round_box = document.getElementsByClassName("round-box")
    H2L.addEventListener("click",()=>{
        for(let el of round_box){
            el.style.backgroundColor = "#fff";
        }
        H2L.style.backgroundColor = "rgb(128, 96, 163)";
        Data.sort((a,b)=> b.priceKey-a.priceKey);
        createDOM(Data);
    });
    L2H.addEventListener("click",()=>{
        for(let el of round_box){
            el.style.backgroundColor = "#fff";
        }
        L2H.style.backgroundColor = "rgb(128, 96, 163)";
        Data.sort((a,b)=> a.priceKey - b.priceKey);
        createDOM(Data);
    })
}

// Filtering Functionality
function filter() {
    let round_box = document.getElementsByClassName("round-box");

    document.getElementById("red").addEventListener("click",()=>{
        category("red");
    });
    document.getElementById("purple").addEventListener("click",()=>{
        category("purple");
    });
    document.getElementById("white").addEventListener("click",()=>{
        category("white");
    });
    document.getElementById("yellow").addEventListener("click",()=>{
        category("yellow");
    });
    document.getElementById("mix").addEventListener("click",()=>{
        category("mix");
    });
    document.getElementById("clear").addEventListener("click",()=>{
        for(let el of round_box){
            el.style.backgroundColor = "#fff";
        }
        createDOM(Data);
    });

    function category(color) {
        for(let el of round_box){
            el.style.backgroundColor = "#fff";
        }
        document.getElementById(`${color}`).style.backgroundColor = "rgb(128, 96, 163)";

        color= color.toLowerCase();
        let newData = allData.filter(el=>{
            if(el.color == color){
                return true;
            }
            return false;
        });

        createDOM(newData);
    }
}


// Create Dom Function using this
function createDOM(data) {
    cont.innerHTML = null;

    data.forEach(el => {
        let card = document.createElement("div");
        card.classList = "card"
        let img = document.createElement("img");
        let name = document.createElement("p");
        let price = document.createElement("h3");
        
        img.src = el.image;
        name.innerText = el.name;
        price.innerText = el.price;

        // Clicking on product Functionality
        card.addEventListener("click",()=>{
            localStorage.setItem("product",JSON.stringify(el));
        })
        card.setAttribute("onclick", "location.href=`./descpage.html`");

        card.append(img,name,price);
        cont.append(card);
    });
}


// Pagination
function pagination() {
    let btns = document.getElementsByClassName("paginationBtn");
    for(let i = 0; i < btns.length; i++){
        
        btns[i].addEventListener("click",()=>{
            btns[i].style.backgroundColor = "rgb(128, 96, 163)";

            for(let el of btns){
                if(el.innerText == btns[i].innerText){
                    continue;
                }
                el.style.backgroundColor = "rgb(184, 162, 207)";
            }

            searchResult(btns[i].innerText);
        });
    }   
}