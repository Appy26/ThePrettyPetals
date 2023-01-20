
// navigation bar
// navigation bar
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
        btn.onclick="location.href=`./searchPage.html`";
    })
}









    let data =[
        {
            id:1,
            image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/170865SU_23x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:2000,
            name:"True Love Gift Basket ",
            category:"Cookies"
        },
        {
            id:2,
            image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/175121U_23x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:7000,
            name:"STrue Love Gift Basket ",
            category:"Cookies"
        },
        {
            id:3,
            image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/175116_23x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:9000,
            name:"My Valentine Bear & Sweets Basket" ,
            category:"Gift Hamper"
        },
        {
            id:4,
            image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/195057G_23x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:6000,
            name:"Valentine's Day Tower of Love",
            category:"Cookies"
        },
        {
            id:5,
            image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/41421SU_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:7000,
            name:"Valentine's Day Tower of Love",
            category:"Gift Hamper"
        },
        {
            id:6,
            image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/41212_23x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:5000,
            name:"Valentine's Day Tower of Love.",
            category:"Gift Hamper"
        },
        {
            id:7,
            image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/174978sux.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:4000,
            name:"Valentine's Day Tower of Love",
            category:"valentine's sweet box"
        },
        {
            id:8,
            image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/149540_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:4000,
            name:"Valentine's Day Tower of Love",
            category:"valentine's sweet box"
        },

        // tvs and projectors
        {
            id:9,
            image:"https://cdn2.simplychocolate.com/wcsstore/SimplyChocolate/images/catalog/163351SU21x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:5000,
            name:"Valentine's Day Tower of Love",
             category:"valentine's sweet box"
        },
        {
            id:10,
            image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/172709_23x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:9000,
            name:"Valentine's Day Tower of Love",
             category:"valentine's sweet box"
        },
        {
            id:11,
            image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/17523021x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:2000,
            name:"Valentine's Day Tower of Love",
             category:"valentine's sweet box"
        },
        {
            id:12,
            image:"https://cdn3.1800baskets.com/wcsstore/Baskets/images/catalog/94551B_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:6000,
            name:"Valentine's Day Tower of Love",
             category:"sweets box"
        },
        {
            id:13,
            image:"https://cdn2.simplychocolate.com/wcsstore/SimplyChocolate/images/catalog/178033_23x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:9000,
            name:"Valentine's Day Tower of Love",
             category:"sweets box"
        },
        {
            id:14,
            image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/17259421x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:5000,
            name:"Valentine's Day Tower of Love",
             category:"sweets box"
        },
        {
            id:15,
            image:"https://cdn3.1800baskets.com/wcsstore/Baskets/images/catalog/106001L_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:4000,
            name:"Valentine's Day Tower of Love",
             category:"sweets box"
        },

        // tablets and Ereaders
        {
            id:16,
            image:"https://cdn2.simplychocolate.com/wcsstore/SimplyChocolate/images/catalog/179897_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:3000,
            name:"Valentine's Day Tower of Love",
             category:"Gift Hamper"
        },
        {
            id:17,
            image:"https://cdn3.1800baskets.com/wcsstore/Baskets/images/catalog/94453_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:8000,
            name:"Valentine's Day Tower of Love",
             category:"Cookies"
        },
        {
            id:18,
            image:"https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/182053plx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:5000,
            name:"Valentine's Day Tower of Love",
             category:"Cookies"
        },
        {
            id:19,
            image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/17284121x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:4000,
            name:"Save up to $350 on select Samsung Galaxy Tab S8 tablets.",
             category:"Nuts Dry Fruits"
        },
        {
            id:20,
            image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/175391_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:3000,
            name:"Valentine's Day Tower of Love",
             category:"Nuts Dry Fruits"
        },
        {
            id:21,
            image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/106005x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:8000,
            name:"Valentine's Day Tower of Love",
             category:"Nuts Dry Fruits"
        },
        {
            id:22,
            image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/106005x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:7000,
            name:"Valentine's Day Tower of Love.",
             category:"Nuts Dry Fruits"
        },

        // Wearable technology
        {
            id:23,
            image:"https://cdn2.simplychocolate.com/wcsstore/SimplyChocolate/images/catalog/179909_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:6000,
            name:"Valentine's Day Tower of Love",
             category:"Nuts Dry Fruits"
        },
        {
            id:24,
            image:"https://cdn3.simplychocolate.com/wcsstore/SimplyChocolate/images/catalog/163519_23x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:4000,
            name:"Valentine's Day Tower of Love",
             category:"Nuts Dry Fruits"
        },
        {
            id:25,
            image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/182054nplx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:2000,
            name:"Valentine's Day Tower of Love",
             category:"Nuts Dry Fruits"
        },
        {
            id:26,
            image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/mk017866x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:3000,
            name:"Valentine's Day Tower of Love",
             category:"Cookies"
        },
        {
            id:27,
            image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/106002_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:8000,
            name:"Valentine's Day Tower of Love",
             category:"Cookies"
        },
        {
            id:28,
            image:"https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk017863x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:4000,
            name:"Valentine's Day Tower of Love",
             category:"Cookies"
        },
        {
            id:29,
            image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/17259421x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:3000,
            name:"Valentine's Day Tower of Love",
             category:"Gift Hamper"
        },
        {
            id:30,
            image:"https://cdn2.simplychocolate.com/wcsstore/SimplyChocolate/images/catalog/178033_23x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:4000,
            name:"Valentine's Day Tower of Love",
             category:"Gift Hamper"
        },
        {
            id:31,
            image:"https://cdn2.simplychocolate.com/wcsstore/SimplyChocolate/images/catalog/179909_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:5000,
            name:"Valentine's Day Tower of Love",
             category:"Gift Hamper"
        },
        {
            id:32,
            image:"https://cdn3.simplychocolate.com/wcsstore/SimplyChocolate/images/catalog/163519_23x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
            price:4000,
            name:"Valentine's Day Tower of Love",
            category:"Gift Hamper"
        },

    ]
function appendData(data){
    let cont=document.getElementById("container")
    cont.innerHTML=null
    data.forEach(function(el,index){
        let card=document.createElement("div")
        card.style.backgroundColor="white"
        let img=document.createElement("img")
        img.src=el.image
        img.id="image"
        let price =document.createElement("h3")
        price.textContent=el.price
        let description=document.createElement("p")
        description.textContent=el.name
        description.id="desc"
        let category=document.createElement("h4")
        category.textContent=el.category
        card.setAttribute("onClick","location.href=`./descpage.html`");
        
        card.addEventListener("click",()=>{
            localStorage.setItem("product",JSON.stringify(el));
        });

        card.append(img,description,price,category)
        cont.append(card);
    })

}
appendData(data)
let lth=document.getElementById("lth")
lth.addEventListener("click",lowtohigh)

function lowtohigh(){
    data=data.sort(function(a,b){
        return a.price-b.price
    })
    appendData(data)
}
let htl=document.getElementById("htl")
htl.addEventListener("click",hightolow)

function hightolow(){
    data=data.sort(function(a,b){
        return b.price-a.price
    })
    appendData(data)
}
let new_data=[]
let priority=document.getElementById("priority")
priority.addEventListener("change",filtered)
function filtered(){
    let selected=document.getElementById("priority").value
if(selected=="sweets box"){
    new_data=data.filter(function(el){
        return el.category==selected
    })
    appendData(new_data)
}
else if(selected=="valentine's sweet box"){
    new_data=data.filter(function(el){
        return el.category==selected
    })
    appendData(new_data)
}
else if(selected=="Gift Hamper"){
    new_data=data.filter(function(el){
        return el.category==selected
    })
    appendData(new_data)
}
else if(selected=="Cookies"){
    new_data=data.filter(function(el){
        return el.category==selected
    })
    appendData(new_data)
}
else if(selected==""){
   
    appendData(data)
}
}
{/* let cartArray=JSON.parse(localStorage.getItem("cart"))||[]
 function AddToCart(el){
    console.log(el)
    cartArray.push(el)
    localStorage.setItem("cart",JSON.stringify(cartArray))
alert("Product added successfully😊")
} */}

