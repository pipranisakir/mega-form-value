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


const editSvgImage = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4_383" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
<rect width="18" height="18" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_4_383)">
<path d="M2.625 18C2.31825 18 2.05406 17.8904 1.83244 17.6711C1.61081 17.4519 1.5 17.1865 1.5 16.875C1.5 16.5682 1.61081 16.304 1.83244 16.0824C2.05406 15.8608 2.31825 15.75 2.625 15.75H15.375C15.6818 15.75 15.9459 15.8596 16.1676 16.0789C16.3892 16.2981 16.5 16.5635 16.5 16.875C16.5 17.1817 16.3892 17.4459 16.1676 17.6675C15.9459 17.8892 15.6818 18 15.375 18H2.625ZM4.5 12.3101H5.42737L11.6524 6.09654L11.1808 5.61785L10.7136 5.15773L4.5 11.3827V12.3101ZM3.375 12.7571V11.1866C3.375 11.0962 3.39012 11.0102 3.42037 10.9284C3.45075 10.8467 3.501 10.7707 3.57113 10.7004L11.7823 2.50817C11.8909 2.39954 12.0142 2.31735 12.1523 2.2616C12.2901 2.20585 12.4326 2.17798 12.5798 2.17798C12.7317 2.17798 12.8763 2.20585 13.0133 2.2616C13.1502 2.31735 13.2769 2.40342 13.3933 2.51979L14.2946 3.43273C14.411 3.54135 14.4951 3.66535 14.547 3.80473C14.599 3.94423 14.625 4.08992 14.625 4.24179C14.625 4.38129 14.599 4.51998 14.547 4.65785C14.4951 4.79585 14.411 4.92304 14.2946 5.03942L6.10238 13.2317C6.03212 13.3019 5.95619 13.3534 5.87456 13.386C5.79281 13.4187 5.70675 13.4351 5.61637 13.4351H4.053C3.85963 13.4351 3.69831 13.3704 3.56906 13.241C3.43969 13.1118 3.375 12.9505 3.375 12.7571ZM11.6524 6.09654L11.1808 5.61785L10.7136 5.15773L11.6524 6.09654Z" fill="#636363"/>
</g>
</svg>`;

const DeleteIcon = `<svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.375 12.125C2.03125 12.125 1.73698 12.0026 1.49219 11.7578C1.2474 11.513 1.125 11.2188 1.125 10.875V2.75H0.5V1.5H3.625V0.875H7.375V1.5H10.5V2.75H9.875V10.875C9.875 11.2188 9.7526 11.513 9.50781 11.7578C9.26302 12.0026 8.96875 12.125 8.625 12.125H2.375ZM8.625 2.75H2.375V10.875H8.625V2.75ZM3.625 9.625H4.875V4H3.625V9.625ZM6.125 9.625H7.375V4H6.125V9.625Z" fill="#636363"/>
</svg>`;

var count = 0;

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


    const ischk = [] // blank array banayo
    if (vehicle1.length > 0) {
        for (let i = 0; i < vehicle1.length; i++) {
            const element = vehicle1[i];
            // jo ek pan checked kare lo hoy to  true push karyu isCHhk aray ma
            // Jo ek pan checked na hoy to array khali rehse 
            if (element.checked) {
                
                ischk.push(element.value)
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
    let AnyChecked = "";
    if (select1.length > 0) {
        for (let i = 0; i < select1.length; i++) {
            const mymain = select1[i];

            if (mymain.checked) {
                // AnyChecked.push(mymain.value);
                AnyChecked = select1[i].value;
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
        ischk.length != 0 &&
        AnyChecked



    ) {
        const formData = {
            name: namedetalis.value,
            email: email.value,
            address: faddress.value,
            Password: fpassword.value,
            country: optionFont.value,
            sport: ischk,
            gender : AnyChecked
        };
        count++;
        console.log(count);
        
        mybox(formData);
        resetForm();

    }

}

function mybox(formData) {
    const tr = document.createElement("tr");
    let id = "list_" + count; 
    tr.id = id;
    console.log(tr);


    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const addressTd = document.createElement("td");
    const sportTd = document.createElement("td");
    const genderTd = document.createElement("td");
    const passwordTd = document.createElement("td");
    const countryTd = document.createElement("td");
    const editTd = document.createElement("td");
    const DeleteTd = document.createElement("td");

    editTd.addEventListener("click", () =>{
        editData(id)
    });

    DeleteTd.addEventListener("click",() =>{
        deleteData()
    });


    editTd.innerHTML = editSvgImage;
    DeleteTd.innerHTML = DeleteIcon;

    nameTd.innerHTML = formData.name;
    emailTd.innerHTML = formData.email;
    addressTd.innerHTML = formData.address;
    passwordTd.innerHTML = formData.Password;
    countryTd.innerHTML = formData.country;
    sportTd.innerHTML = formData.sport;
    genderTd.innerHTML = formData.gender;




    tr.append(
        nameTd,
        emailTd,
        passwordTd,
        addressTd,
        sportTd,
        genderTd,
        countryTd,
        editTd,
        DeleteTd

    );
    console.log(tr);

    tBody.appendChild(tr);

}

function resetForm() {
    namedetalis.value = "";
    email.value = "";
    faddress.value = "";
    optionFont.value = "";
    fpassword.value = "";

}

function editData(value){
    console.log("Edit function Called", value);

    const sportElement = document.getElementById(value);

    console.log(sportElement.children[0].innerHTML);
    console.log(sportElement.children[1].innerHTML);
    console.log(sportElement.children[2].innerHTML);
    console.log(sportElement.children[3].innerHTML);
    console.log(sportElement.children[4].innerHTML);
    console.log(sportElement.children[5].innerHTML);
    console.log(sportElement.children[6].innerHTML);

    namedetalis.value = sportElement.children[0].innerHTML;
    email.value = sportElement.children[1].innerHTML;
    fpassword.value = sportElement.children[2].innerHTML;
    faddress.value = sportElement.children[3].innerHTML;
    optionFont.value = sportElement.children[6].innerHTML;

    if(vehicle1.length > 0){
        for (let i = 0; i < vehicle1.length; i++) {
            const element = vehicle1[i];

            const allVall = sportElement.children[4].innerHTML.split(",");
            if (allVall.includes(element.value)) {
                element.checked = true;
            }
            
        }
    }

    if (select1.length > 0) {
        for (let i = 0; i < select1.length; i++) {
            const myDetalis = select1[i];

            const myMain  = sportElement.children[5].innerHTML;

            if (myMain.includes(myDetalis.value)) {
                
            
            myDetalis.checked = true;
            
        }
    }
}
    
    
    
}
function deleteData(){
    console.log("Delete Function Called");
    
}


