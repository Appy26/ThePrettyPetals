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
    if(form.pass.value.length >5){
        pass = true;
    } else {
        document.getElementById("pass").style.border = "1px solid red";
        alert("Password length should be greater than 5 characters");
    }
    if(email && pass){
        fetchReq(credentials);
    }

    // Creating Fetch request of POST
    async function fetchReq(data){
        let request = await fetch(`${url}register`)
        let result = await request.json();
        var authentication = false;

        if(request.ok){
            checkAuthentication(result);
        } else {
            setTimeout(()=>{
                alert("Oops!! Looks like Backend server isn't Responding. Please Login with Admin credentials");
            },5000)
            result = [{email:"admin@gmail.com",pass:"123",firstName:"Admin",lastName:""}];
        }

        if(authentication){
            if(window.confirm("Registration Successful. Click 'OK' to Login")){
                window.open(`./loginPage.html`,"_self");
            }
        } else {
            alert("Email or Password is Incorrect");
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