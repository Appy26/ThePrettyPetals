const checkingIfSignedIn = document.getElementById("nav-third-div");
// Checking if signedIn
signedIn()
function signedIn() {
    let signedIn = localStorage.getItem("signedIn");

    if(signedIn == "true"){
        checkingIfSignedIn.innerHTML = null;
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
        checkingIfSignedIn.append(div1,div2,div3,div4);
        
    } else {
        checkingIfSignedIn.innerHTML = null;
        let btn1 = document.createElement("button");
        btn1.setAttribute("id", "loginBtn");
        btn1.setAttribute("onclick", "location.href=`./loginPage.html`");

        let btn2 = document.createElement("button");
        btn2.setAttribute("id", "registerBtn");
        btn2.setAttribute("onclick", "location.href=`./registerPage.html`");

        btn1.innerText = "Login";
        btn2.innerText = "Register";

        checkingIfSignedIn.style.marginRight = "7%"

        checkingIfSignedIn.append(btn1,btn2);
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

let productData = JSON.parse(localStorage.getItem("product"));
const cont = document.getElementById("container");

createDOM();
function createDOM() {
    cont.innerHTML = null;
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    img.src = productData.image;

    div2.innerHTML = `
    <div><h3>Description</h3>
    <p>Adenium is a genus of flowering plants in the family Apocynaceae first described as a genus in 1819. It is native to Africa and the Arabian Peninsula</p></div>
    <h3>Highlights</h3>
    <ul><li><p><span>Plant Name</span>: ${productData.name}</p></li></ul>
    <ul><li> <p><span>Type</span>: Flower</p></li></ul>
    <ul><li> <p><span>Suitable Location</span>: Indoor</p></li></ul>
    <ul><li><p><span>Height</span>: 180 mm</p></li></ul>
    <div id="button"><button id="wishlist">Add to Wishlist</button><button id="cart">Add to Cart</button></div>`

    div1.append(img);
    cont.append(div1,div2);
}
// document.getElementById("wishlist").addEventListener("click",async()=>{
//     try {
//         let req = await fetch(`${url}`)
//     } catch () {
        
//     }
// });
