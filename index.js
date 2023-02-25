let inputBox = document.getElementsByClassName('form-input');
Array.from(inputBox).forEach(function(element){
    element.addEventListener('input', function(event){
        if(event.target.id=="cardholder-name"){
            let content = document.getElementById('cardholder-name').value.toUpperCase();
            document.getElementById('cardholder-name-entered').innerText = content;
        }

        if(event.target.id=="card-number"){
            let content = document.getElementById('card-number').value;
            content = String(content);
            document.getElementById('card-number-entered').innerText = content.substr(0,20);
        }

        if(event.target.id=="month"){
            let month = document.getElementById('month').value;
            let year = document.getElementById('year').value;
            month = String(month);
            year = String(year);
            if(year.length==0){
                document.getElementById('exp-date-entered').innerText = month.substr(0,2) + "/00";
            }
            else{
                document.getElementById('exp-date-entered').innerText = month.substr(0,2) + "/" + year.substr(0,2);
            }
        }
        if(event.target.id=="year"){
            let month = document.getElementById('month').value;
            let year = document.getElementById('year').value;
            month = String(month);
            year = String(year);
            if(month.length==0){
                document.getElementById('exp-date-entered').innerText = "00/" + year.substr(0,2);
            }
            else{
                document.getElementById('exp-date-entered').innerText = month.substr(0,2) + "/" + year.substr(0,2);
            }
        }

        if(event.target.id=="cvc"){
            let content = document.getElementById('cvc').value;
            content = String(content);
            document.getElementById('cvc-entered').innerText = content.substr(0,3);
        }
    });
});

let confirmBtn = document.getElementsByClassName("confirm-button")[0];
confirmBtn.addEventListener("click", function(event){
    let valid = true;
    let cardholderName = document.getElementById('cardholder-name')
    if(cardholderName.value.length<3){
        document.getElementById('cardholder-name-blank').style.visibility = "visible";
        cardholderName.style.borderColor = "red";
        valid &= false;
    }
    else{
        document.getElementById('cardholder-name-blank').style.visibility = "hidden";
        cardholderName.style.borderColor = "grey";
    }

    let cardNumber = document.getElementById('card-number');
    if(cardNumber.value.length<16){
        document.getElementById('card-number-blank').style.visibility = "visible";
        cardNumber.style.borderColor = "red";
        valid &= false;
    }
    else{
        document.getElementById('card-number-blank').style.visibility = "hidden";
        cardNumber.style.borderColor = "grey";
    }

    let month = document.getElementById('month');
    let year = document.getElementById('year');
    if(month.value.length!=2){
        document.getElementById('exp-date-blank').style.visibility = "visible";
        month.style.borderColor = "red";
        valid &= false;
    }
    else{
        document.getElementById('exp-date-blank').style.visibility = "hidden";
        month.style.borderColor = "grey";
    }
    
    if(year.value.length!=2){
        document.getElementById('exp-date-blank').style.visibility = "visible";
        year.style.borderColor = "red";
        valid &= false;
    }
    else{
        document.getElementById('exp-date-blank').style.visibility = "hidden";
        year.style.borderColor = "grey";
    }

    let cvc = document.getElementById('cvc');
    if(cvc.value.length!=3){
        document.getElementById('cvc-blank').style.visibility = "visible";
        cvc.style.borderColor = "red";
        valid &= false;
    }
    else{
        document.getElementById('cvc-blank').style.visibility = "hidden";
        cvc.style.borderColor = "grey";
    }

    if(valid){
        document.getElementsByTagName('form')[0].style.visibility = "hidden";
        document.getElementsByClassName('confirm-button')[0].style.visibility = "hidden";
        document.getElementsByClassName('completed')[0].style.visibility = "visible";
        document.getElementsByClassName('continue-btn')[0].style.visibility = "visible";
    }
});

let continueBtn = document.getElementsByClassName('continue-btn')[0];
continueBtn.addEventListener('click', function(event){
    document.getElementsByTagName('form')[0].style.visibility = "visible";
    document.getElementsByClassName('confirm-button')[0].style.visibility = "visible";
    document.getElementsByClassName('completed')[0].style.visibility = "hidden";
    document.getElementsByClassName('continue-btn')[0].style.visibility = "hidden";

    document.getElementById('cardholder-name-entered').innerText = "Jane Appleseed";
    document.getElementById('card-number-entered').innerText = "0000 0000 0000 0000";
    document.getElementById('exp-date-entered').innerText = "00/00";
    document.getElementById('cvc-entered').innerText = "123";

    document.getElementById('cardholder-name').value = "";
    document.getElementById('card-number').value = "";
    document.getElementById('month').value = "";
    document.getElementById('year').value = "";
    document.getElementById('cvc').value = "";
});