const url = `https://jsson-testing.onrender.com/`;
const cont = document.getElementById("search-results");
searchResult();

async function searchResult() {
    let request = await fetch(`${url}products/`);
    let result = await request.json();
    createDOM(result);
}

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

        card.append(img,name,price);
        cont.append(card);
    });
}