// navigation page

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
    let credentials = {
        email:form.email.value,
        pass:form.pass.value
    }

    // Form Validation Here
    let email = false;
    let pass = false;

    if(form.email.value.length > 7){
        email = true;
    } else {
        document.getElementById("email").style.border = "1px solid red";
        alert("Please Enter valid Email");
    }
    if(form.pass.value.length > 5){
        pass = true;
    } else {
        document.getElementById("pass").style.border = "1px solid red";
        alert("Password length should be greater than 5 characters");
    }
    if(email && pass){
        fetchReq(credentials);
    }

    // Creating Fetch request of POST
    async function fetchReq(creadentialsData){
        try {
            let request = await fetch(`${url}register`)
            var result = await request.json();
            var authentication = false;

            if(request.ok){
                checkAuthentication(result);
            }

            if(authentication){
                localStorage.setItem("signedIn","true");
                if(window.confirm("Registration Successful. Click 'OK' to Login")){
                    window.open(`./loginPage.html`,"_self");
                }
            } else {
                alert("Email or Password is Incorrect");
            }
            
        } catch (error) {
            // console.log(error);

            let errorMsg = setTimeout(()=>{
                if(window.confirm("Oops!! Looks like Backend server isn't Responding. Please Login with Admin credentials")){
                    window.open(`./loginPage.html`,"_self");
                }
            },2000)

            var result = [{email:"admin@gmail.com",pass:"123456",firstName:"Admin",lastName:""}];
            checkAuthentication(result);

            if(authentication){
                clearInterval(errorMsg);
                localStorage.setItem("signedIn","true");
                if(window.confirm("Login Successful. Click 'OK' to place Orders")){
                    window.open(`./loginPage.html`,"_self");
                }
            }
        }
        // Authentication checking
        function checkAuthentication(data){
            for(let el of data){
                if(el.email === credentials.email && el.pass === credentials.pass){
                    authentication = true;
                    localStorage.setItem("user",JSON.stringify(el));
                    break;
                }
            }
        }
    }
})