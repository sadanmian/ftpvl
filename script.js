
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var address = document.forms["myForm"]["address"].value;
    var mobile = document.forms["myForm"]["mobile"].value;
    var email = document.forms["myForm"]["email"].value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (address === "") {
        alert("Address must be filled out");
        return false;
    }

    if (mobile === "") {
        alert("Mobile Number must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    var mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Invalid Mobile Number");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid Email");
        return false;
    }

    document.getElementById("successMessage").style.display = "block";
    document.getElementById("myForm").reset();
    return false;


}
