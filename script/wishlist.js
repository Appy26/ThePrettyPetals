
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

var user = JSON.parse(localStorage.getItem("user"));
const url = `https://jsson-testing.onrender.com/`;
var container = document.getElementById("card-items");
var Data;
var fullData;
fetchData();
async function fetchData() {
    let req = await fetch(`${url}register/${user.id}/`);
    let res = await req.json();
    fullData = res;
    Data = res.wishlist;
    createDOM(Data);
}


function createDOM(data) {
    if(!data){
        let h3 = document.createElement("h3");
        h3.innerText = "No Items to show here";
        h3.style.textAlign = "center";
        container.append(h3);
        return;
    }
    container.innerHTML = null;
    console.log(data);
    data.forEach((el,i) => {
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let img = document.createElement("img");
        let name = document.createElement("h3");
        let price = document.createElement("p");
        let imgDiv = document.createElement("div");
        let nameDiv = document.createElement("div");
        let remove = document.createElement("div");
        remove.setAttribute("class","remove");
        let p = document.createElement("p");
        let add = document.createElement("div");
        let p2 = document.createElement("p");
        add.setAttribute("class","add-to-cart");
        let div = document.createElement("div");
        div.setAttribute("class","rem");

        // Event Listeners
        add.addEventListener("click",async()=>{
            fullData.cart.push(el);
            data.splice(i,1);
            fullData.wishlist = data;
            await fetch(`${url}register/${user.id}`,{
                method:`PATCH`,
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(fullData)
            });
            createDOM(data);
        });
        remove.addEventListener("click",async()=>{
            data.splice(i,1);
            fullData.wishlist = data;
            await fetch(`${url}register/${user.id}`,{
                method:`PATCH`,
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(fullData)
            });
            createDOM(data);
        });
        
        img.src = el.image;
        name.innerText = el.name.substr(0,40);
        price.innerText = `Price:- ${el.price}`;
        p.innerText = "Remove Product";
        p2.innerText = "Add To Cart";

        add.append(p2);
        remove.append(p);
        div.append(add,remove);
        imgDiv.append(img);
        nameDiv.append(name,price,div);
        card.append(imgDiv,nameDiv);
        container.append(card);
    });
    if(data.length == 0){
        let h3 = document.createElement("h3");
        h3.innerText = "No Items to show here";
        h3.style.textAlign = "center";
        container.append(h3);
    }

}