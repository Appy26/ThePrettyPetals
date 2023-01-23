
let data = JSON.parse(localStorage.getItem("admin_data"));

document.querySelector("#admin_name").innerText = localStorage.getItem("admin_name")
// document.querySelector("#img_nav").setAttribute("src", data.usertype);

const url = `https://jsson-testing.onrender.com/`;
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};
let globalData;
let admin_details = document.querySelector(".sales-details");
async function Fetch_admin() {
    try {
        let api_data = await fetch(
            `${url}products`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        let data = await api_data.json();
        // console.log(data);
        globalData = data;
        displayCards(data);
    } catch (error) {
        alert("Can't able to fetch Details of Admin");
    }
}
Fetch_admin();


function displayCards(data) {
    let admin_details = document.querySelector(".sales-details");
    admin_details.innerHTML = "";
    data.forEach((element) => {
        let div = document.createElement("div");
        div.addEventListener("click", function () {
            localStorage.setItem("product_details", JSON.stringify(element));
        });

        let img = document.createElement("img");
        img.setAttribute("src", element.image);
        let id = document.createElement("h4");
        id.innerText = "Id: " + element.id;
        let offer = document.createElement("h4");
        let tit = "Title: " + element.name.substr(0,20)+"...";
        // offer.innerText = `${tit.substring(0, 15)}...`;
        // let discription = document.createElement("p");
        // let str = element.discription;
        // discription.innerText = `${str.substring(0, 25)}...`;
        let price = document.createElement("h4");
        price.innerHTML = `<h4> ${element.price}</h4>`;

        div.append(img, id,tit, price);
        document.querySelector(".sales-details").append(div);
    });
}

let productCategory = document.getElementById("addCategory");
let productTitle = document.getElementById("addTitle");
let productPrice = document.getElementById("addPrice");

let addButton = document.getElementById("addBtn");
addButton.addEventListener("click", (event) => {
    let obj = {
        image: productCategory.value,
        name: productTitle.value,
        priceKey: productPrice.value,
        price : `$${productPrice.value}`
    };

    addData(obj);
});
let c = localStorage.getItem("count") || 0;
async function addData(obj) {
    try {
        let data = await fetch(
            `${url}products`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(obj),
            }
        );
        if (data.ok) {
            let addProductData = await data.json();
            c++;
            localStorage.setItem("count", c);
            alert("Product Added successfully👍");
            window.location.href = "add_product.html"
            // displayCards(globalData);
        } else {
            alert("Data cant be added");
        }
    } catch (error) {
        alert(error);
    }
}

userDetailss();
function userDetailss() {
    let admin = JSON.parse(localStorage.getItem("admin"));
    let cont = document.getElementById("admin_name");
    let cont2 = document.getElementById("img-admin");
    
    cont2.innerHTML = `<img src="${admin.image}">`
    cont.innerHTML = `${admin.name}`
};

document.getElementsByClassName("log_out")[0].addEventListener("click",()=>{
    localStorage.clear("admin-signed");
    localStorage.clear("admin");
});