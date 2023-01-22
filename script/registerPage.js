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



const url = `https://jsson-testing.onrender.com/`;
const form = document.querySelector("form");


// Form Functionality
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    // Form Data
    let userDetails = {
        firstName: form.name.value,
        lastName: form.name2.value,
        email:form.email.value,
        pass:form.pass.value,
        cart:[],
        wishlist:[],
        ordered:[]
    }

    // Form Validation Here
    let firstName = false;
    let email = false;
    let pass = false;
    if(form.name.value.length > 3 && form.name2.value.length > 3){
        firstName = true;
    } else {
        document.getElementById("name").style.border = "1px solid red";
        document.getElementById("name2").style.border = "1px solid red";
        alert("Please enter valid Firstname and Lastname");
    }
    if(form.email.value.length > 7){
        email = true;
    } else {
        document.getElementById("email").style.border = "1px solid red";
        alert("Please Enter valid Email");
    }
    if(form.pass.value.length >5){
        pass = true;
    } else {
        document.getElementById("pass").style.border = "1px solid red";
        alert("Password length should be greater than 5 characters");
    }
    if(firstName && email && pass){
        fetchReq(userDetails);
    }

    // Creating Fetch request of POST
    async function fetchReq(data){
        try {
            let request = await fetch(`${url}register`,{
                method:`POST`,
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(data)
            })
            let result = await request.json();

            if(request.ok){
                if(window.confirm("Registration Successful. Click 'OK' to Login")){
                    window.open(`./loginPage.html`,"_self");
                }
            } else {
                setTimeout(()=>{
                    if(window.confirm("Oops!! Looks like Backend server isn't Responding. Please Login with Admin credentials")){
                        window.open(`./loginPage.html`,"_self");
                    }
                },4000)
            }
        } catch (error) {
            // console.log(error);
            setTimeout(()=>{
                if(window.confirm("Oops!! Looks like Backend server isn't Responding. Please Login with Admin credentials")){
                    window.open(`./loginPage.html`,"_self");
                }
            },4000)
        }
        
    }
})