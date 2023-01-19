const url = `https://jsson-testing.onrender.com/`;
const cont = document.getElementById("search-results");
let searchKeyword = JSON.parse(localStorage.getItem("search"));
let Data;
let filterAppliedData;
let isFilterApplied = false;

// All Functions Calling
Sort();
pagination()

// Search Functionality
if(searchKeyword){
    searchResultCertainCondition()
} else {
    searchResult(1);
}

// Default Search Result
async function searchResult(i) {
    let request = await fetch(`${url}products?_limit=12&_page=${i}`);
    let result = await request.json();
    Data = result;
    console.log(result);
    createDOM(result);
}

// If search input is given in homepage/indexPage
async function searchResultCertainCondition() {
    let request = await fetch(`${url}products?_limit=12&_page=1`);
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
    let newResult = Data.filter(el=>{
        if(el.name.toLowerCase().includes(keyWord) || el.color.toLowerCase().includes(keyWord)){
            return true;
        }
        return false;
    });
    filterAppliedData = newResult;
    isFilterApplied = true;
    createDOM(newResult);
});

// Sorting Functionality

function Sort() {
    let H2L = document.getElementById("H2L");
    H2L.addEventListener("click",()=>{
        if(isFilterApplied){
            console.log(filterAppliedData);
            filterAppliedData.Sort(a,b=>(a.price-key) - (b.price-key));
            console.log(filterAppliedData);
        }
    });
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

        card.append(img,name,price);
        cont.append(card);
    });
}

// Pagination
function pagination() {
    let btns = document.getElementsByClassName("paginationBtn");
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click",()=>{
            searchResult(btns[i].innerText);
        });
    }
    
}