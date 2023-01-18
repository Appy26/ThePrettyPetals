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