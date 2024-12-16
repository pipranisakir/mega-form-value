const namedetalis = document.getElementById("fname");
const spanError = document.getElementById("spanError");

const email = document.getElementById('femail');
const SpanPlease = document.getElementById('SpanPlease');

const fpassword = document.getElementById('fpassword');
const SpanPassword = document.getElementById('SpanPassword');

const faddress = document.getElementById('faddress');
const spanAddress = document.getElementById('spanAddress');

const vehicle1 = document.querySelectorAll('input[name="vehicle1"]')
const spanSport = document.getElementById('spanSport');

const select1 = document.querySelectorAll('input[name = "select1"]');
const spanchoose = document.getElementById('spanchoose');

const optionFont = document.getElementById('optionFont');
const spancountry = document.getElementById('spancountry');

const noUserElement = document.getElementById("noUser");
const tBody = document.getElementById("tBody");

function mybutton() {
    if (!namedetalis.value) {
        spanError.style.display = 'block';
    } else {
        spanError.style.display = 'none';
    }


    if (!email.value) {
        SpanPlease.style.display = 'block';
    } else {
        SpanPlease.style.display = 'none';
    }

    if (!fpassword.value) {
        SpanPassword.innerHTML = "Please your Password!"
        SpanPassword.style.display = 'block';

    } else if (fpassword.value.length < 4 || fpassword.value.length > 12) {
        SpanPassword.innerHTML = "Your password is between 4 and 12 characters"
        SpanPassword.style.display = 'block';

    } else {
        SpanPassword.style.display = 'none';
    }

    if (!faddress.value) {
        spanAddress.style.display = 'block';
    } else {
        spanAddress.style.display = 'none';
    }


    if (vehicle1.length > 0) {
        const ischk = [] // blank array banayo
        for (let i = 0; i < vehicle1.length; i++) {
            const element = vehicle1[i];
            // jo ek pan checked kare lo hoy to  true push karyu isCHhk aray ma
            // Jo ek pan checked na hoy to array khali rehse 
            if (element.checked) {
                ischk.push(true)
            }

        }
        console.log(ischk);


        // jo array khali hoy to error samjvanu and na hoy to error nathi 
        if (ischk.length == 0) {
            spanSport.style.display = 'block';
        } else {
            spanSport.style.display = 'none';
        }
    }

    if (select1.length > 0) {
        const AnyChecked = [];
        for (let i = 0; i < select1.length; i++) {
            const mymain = select1[i];

            if (mymain.checked) {
                AnyChecked.push(true);
            }

        }

        if (AnyChecked.length == 0) {
            spanchoose.style.display = 'block';
        } else {
            spanchoose.style.display = 'none';
        }
    }

    if (!optionFont.value) {
        spancountry.style.display = 'block';
    } else {
        spancountry.style.display = 'none';
    }

    if (namedetalis.value && 
        email.value && 
        faddress.value &&
        optionFont.value && 
        fpassword.value && 
        fpassword.value.length > 4 && 
        fpassword.value.length < 12 &&
        vehicle1.length != 0 &&
        select1.length  != 0



    ){
        const formData ={
            name: namedetalis.value,
            email: email.value,
            address:  faddress.value,
            Password:  fpassword.value,
            country:  optionFont.value
        };

        mybox(formData);
        resetForm();
        
    }
    
}

function mybox(formData){
    const tr = document.createElement("tr");
    console.log(tr);
    

    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const addressTd = document.createElement("td");
    const sportTd = document.createElement("td");
    const genderTd = document.createElement("td");
    const passwordTd = document.createElement("td");
    const countryTd = document.createElement("td");

    nameTd.innerHTML = formData.name;
    emailTd.innerHTML = formData.email;
    addressTd.innerHTML = formData.address;
    passwordTd.innerHTML = formData.Password;
    countryTd.innerHTML = formData.country;
    sportTd.innerHTML = "black sport";
    genderTd.innerHTML = "black gender";


    tr.append(
        nameTd,
        emailTd,
        passwordTd,
        addressTd,
        sportTd,
        genderTd,
        countryTd

    );
    console.log(tr);
    
    tBody.appendChild(tr);

}

function resetForm(){
    namedetalis.value = "";
    email.value = "";
    faddress.value = "";
    optionFont.value = "";
    fpassword.value ="";
}