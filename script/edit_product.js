let data = JSON.parse(localStorage.getItem("admin_data"));
const url = `https://the-pretty-petals-backend.onrender.com/`;

document.querySelector("#admin_name").innerText = localStorage.getItem("admin_name")
// document.querySelector("#img_nav").setAttribute("src", data.usertype);

let deleted = JSON.parse(localStorage.getItem("deleted")) || [];

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
        let tit = "Title: " + element.name.substr(0,20);
        let price = document.createElement("h4");
        let del = document.createElement("button");
        price.innerHTML = `<h4>${element.price}</h4>`;
        del.innerText = "Delete";
        del.classList = "delete";

        del.addEventListener("click",async ()=>{
            let productId = element.id;
            deleted.push(element);
            localStorage.setItem("deleted",JSON.stringify(deleted));
            
            try {
                let api_data = await fetch(
                    `${url}products/${productId}`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
        
                if (api_data.ok) {
                    let data = await api_data.json();
                    window.location.href = "edit_product.html";
                    displayCards(globalData);
                    c++;
                    localStorage.setItem("deletecount", c);
                } else {
                    console.log("not editing data");
                }
            } catch (error) {
                alert(error);
            }
        });
        div.append(img, id,tit, price,del);
        document.querySelector(".sales-details").append(div);
    });
}

let updatedButton = document.getElementById("addBtn");

updatedButton.addEventListener("click", editProduct);
let c = localStorage.getItem("editcount") || 0;
async function editProduct() {
    let productId = document.getElementById("addId").value;
    let categoryData = document.getElementById("addCategory").value;
    let title = document.getElementById("addTitle").value;
    let price = document.getElementById("addPrice").value;



    try {
        let api_data = await fetch(
            `${url}products/${productId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: title,
                    image: categoryData,
                    price: `$${price}`,
                    id: productId,
                    priceKey: price
                }),
            }
        );
        console.log(api_data);
        if (api_data.ok) {
            let data = await api_data.json();
            c++;
            localStorage.setItem("editcount", c);
            alert("Product Edited");
            window.location.href = "edit_product.html"
        } else {
            console.log("not editing data");
        }
    } catch (error) {
        alert(error);
    }

}
editProduct();

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