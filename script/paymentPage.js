// Loader
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".mesh-loader").style.visibility = "visible";
    } else {
        document.querySelector(".mesh-loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
    };
    // Till here

// navigation bar
const CheckingIfLogIn = document.getElementById("nav-third-div");
// Checking if signedIn
signedIn()
function signedIn() {
    let signedIn = localStorage.getItem("signedIn");

    if (signedIn == "true") {
        CheckingIfLogIn.innerHTML = null;
        let div1 = document.createElement("div");
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
        CheckingIfLogIn.append(div1, div2, div3, div4);

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

        CheckingIfLogIn.append(btn1, btn2);
    }
}


// Search input part
Search();
function Search() {
    let search = document.getElementById("inp");
    let btn = document.getElementById("searchBtn");

    btn.addEventListener("click", () => {
        localStorage.setItem("search", JSON.stringify(search.value));
        btn.onclick = "location.href=`./searchPage.html`";
    })
}

const url = `https://the-pretty-petals-backend.onrender.com/`;
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Validation
    if (!form.name.value || !form.email.value || !form.address.value || !form.city.value || !form.state.value || !form.zipcode.value || !form.cardtype.value || !form.cardnumber.value || !form.expiry.value || !form.cvv.value) {
        alert("Please Fill all the Mandatory Areas");
        return;
    }
    otp();
});

function otp() {
    let otp = document.getElementById("otp");
    let OTP = Math.floor(Math.random() * 10000);

    otp.innerHTML = `<h1>Enter OTP</h1>
        <h3>OTP:- ${OTP}</h3>
        <input type="number" id="otpValue" placeholder="OTP">
        <button id="otpSubmit">Submit</button>
        <h5 id="wait"></h5>
    `
    let submit = document.getElementById("otpSubmit");

    submit.addEventListener("click", () => {
        let value = document.getElementById("otpValue");
        if (value.value == OTP) {
            fetchReqest();
        } else {
            alert("Please Enter Correct OTP");
        }

    });
    otp.style.visibility = "visible";
}

async function fetchReqest() {
    let product = JSON.parse(localStorage.getItem("product"));
    let user = JSON.parse(localStorage.getItem("user"));

    try {
        // Getting the data
        let req = await fetch(`${url}register/${user.id}/`);
        let res = await req.json();

        for (let el of res.cart) {
            res.ordered.push(el);
        }
        res.cart = [];

        // Updating the data
        await fetch(`${url}register/${user.id}`, {
            method: `PATCH`,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(res)
        });
        alert("Payment Successfull");
        window.open(`./userDashboard.html`,"_self");
    } catch (err) {
        console.error(err);
    }
}