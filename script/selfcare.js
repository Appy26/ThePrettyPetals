
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
    image:"https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/155227lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"59.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Baskets"
},
{
    id:2,
    image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/175331G21x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"79.99",
    name:"Preserved lavender Wreath",
    category:"Baskets"
},
{
    id:3,
    image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/177513scx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"129.99",
    name:"Daydream Boquet",
    category:"Baskets"
},
{
    id:4,
    image:"https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/190242bdx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"39.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Baskets"
},
{
    id:5,
    image:"https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/190241sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",   
    price:"19.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Baskets"
},{
    id:6,
    image:"https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/177947sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"32.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Naturally gifted"
},
{
    id:7,
    image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/14974022a2x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"25.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Naturally gifted"
},
{
    id:8,
    image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/mk012993x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"46.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Naturally gifted"
},
{
    id:9,
    image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/4122522x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"83.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Naturally gifted"
},
{
    id:10,
    image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/41174_22a2x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"62.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Naturally gifted"
},
{
    id:11,
    image:"https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk012987x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"53.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Good vibes"
},
{
    id:12,
    image:"https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/mk012139x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"16.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Good vibes"
},
{
    id:13,
    image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/155227lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"78.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Good vibes"
},
{
    id:14,
    image:"https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/156428sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"43.99",
    name:"Preserved lavender Wreath",
    category:"Good vibes"
},
{
    id:15,
    image:"https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"12.99",
    name:"Daydream Boquet",
    category:"Good vibes"
},
{
    id:16,
    image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/155888l110118x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"29.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Good vibes"
},
{
    id:17,
    image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/190404sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",   
    price:"35.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Good vibes"
},{
    id:18,
    image:"https://cdn3.1800baskets.com/wcsstore/Baskets/images/catalog/175389_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"63.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Good vibes"
},
{
    id:19,
    image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/mk012997x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"35.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Good vibes"
},
{
    id:20,
    image:"https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk012986x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"53.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Good vibes"
},
{
    id:21,
    image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/190404sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"59.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Good vibes"
},
{
    id:22,
    image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/177896sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"63.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Good vibes"
},
{
    id:23,
    image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/16252922x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"35.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Naturally gifted"
},
{
    id:24,
    image:"https://cdn3.1800baskets.com/wcsstore/Baskets/images/catalog/41193_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"45.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Naturally gifted"
},

{
    id:25,
    image:"https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"18.99",
    name:"Daydream Boquet",
    category:"Naturally gifted"
},
{
    id:26,
    image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/175392_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"45.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Naturally gifted"
},
{
    id:27,
    image:"https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/mk008480x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",   
    price:"34.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Naturally gifted"
},{
    id:28,
    image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/175214a3x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"63.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Baskets"
},
{
    id:29,
    image:"https://cdn2.1800baskets.com/wcsstore/Baskets/images/catalog/175391_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"83.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Baskets"
},
{
    id:30,
    image:"https://cdn1.1800baskets.com/wcsstore/Baskets/images/catalog/41175_22x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"23.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Baskets"
},
{
    id:31,
    image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/190404sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"12.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Baskets"
},
{
    id:32,
    image:"https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/177896sx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
    price:"54.99",
    name:"Sonoma Lavender Bath Gift Set",
    category:"Baskets"
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
        img.style.width="80%"
        let price =document.createElement("h3")
        price.textContent=el.price
        let name=document.createElement("p")
        name.textContent=el.name
        name.id="desc"
        let category=document.createElement("h4")
       category.textContent=el.category
        card.setAttribute("onClick","location.href=`./descpage.html`");
        
        card.addEventListener("click",()=>{
            localStorage.setItem("product",JSON.stringify(el));
        });

        card.append(img,name,price,category)
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
if(selected=="Naturally gifted"){
    new_data=data.filter(function(el){
        return el.category==selected
    })
    appendData(new_data)
}
else if(selected=="Baskets"){
    new_data=data.filter(function(el){
        return el.category==selected
    })
    appendData(new_data)
}
else if(selected=="Good vibes"){
    new_data=data.filter(function(el){
        return el.category==selected
    })
    appendData(new_data)
}

else if(selected==""){
   
    appendData(data)
}
}
let cartArray=JSON.parse(localStorage.getItem("cart"))||[]
// function AddToCart(el){
//     console.log(el)
//     cartArray.push(el)
//     localStorage.setItem("cart",JSON.stringify(cartArray))
// alert("Product added successfully😊")
// }

