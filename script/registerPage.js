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
        pass:form.pass.value
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