window.addEventListener('load',()=>{
    alert('Fill in the form and press "Enter" to see the result')
})
let optionButton = document.querySelectorAll('fieldset > button');
let tipInput = document.querySelector('fieldset > input[type="text"]');
let bill = document.querySelector('.bill > input');
let numberOfPeople = document.querySelector('.number-of-people > input');
let tip = 0;
for(let i = 0;i < optionButton.length;i++){
    optionButton[i].addEventListener('click',()=>{
        optionButton[i].style.backgroundColor = "hsl(172, 67%, 45%)";
        optionButton[i].style.color = "hsl(183, 100%, 15%)";
        document.querySelector('button[type="reset"]').style.backgroundColor = "hsl(172, 67%, 45%)";
        document.querySelector('button[type="reset"]').style.color = "hsl(183, 100%, 15%)";
        document.querySelector('button[type="reset"]').style.opacity = "1";
        tip = Number(optionButton[i].value);
        for(let j = 0; j < optionButton.length;j++){
            if(i!=j){
                optionButton[j].style.backgroundColor = " hsl(183, 100%, 15%)";
                optionButton[j].style.color = "white";
            }
        }
    });
}
bill.addEventListener('focus',()=>{
    bill.style. color = "hsl(183, 100%, 15%)";
    document.querySelector('button[type="reset"]').style.backgroundColor = "hsl(172, 67%, 45%)"
    document.querySelector('button[type="reset"]').style.color = "hsl(183, 100%, 15%)";
    document.querySelector('button[type="reset"]').style.opacity = '1';
});
numberOfPeople.addEventListener('focus',()=>{
    numberOfPeople.style.color = "hsl(183,100%,15%)";
    document.querySelector('button[type="reset"]').style.backgroundColor = "hsl(172, 67%, 45%)"
    document.querySelector('button[type="reset"]').style.color = "hsl(183, 100%, 15%)";
    document.querySelector('button[type="reset"]').style.opacity = '1';
});
document.querySelector('button[type="reset"]').addEventListener('click',()=>{
    document.querySelector('button[type="reset"]').style.backgroundColor = "hsl(186, 14%, 43%)"
    document.querySelector('button[type="reset"]').style.color = "hsl(183, 100%, 15%)";
    document.querySelector('button[type="reset"]').style.opacity = '0.2';
});
document.querySelector('.container').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if(Number(numberOfPeople.value)!= 0){
            if(document.querySelector('input[placeholder="Custom"]').value!=""){
                tip = Number(document.querySelector('input[placeholder="Custom"]').value)/100;
            }
            let tipPerHead = ((Number(bill.value * tip))/(Number(numberOfPeople.value))).toFixed(2);
            let totalPerHead = ((Number(bill.value) + Number(bill.value) * tip)/(Number(numberOfPeople.value))).toFixed(2);
            document.querySelector('.tip-per-person .calculated-result').innerText = tipPerHead;
            document.querySelector('.total-per-person .calculated-result').innerText = totalPerHead;
        }
        else{
            document.querySelector('.error-message').classList.add('active');
            document.querySelector('.number-of-people').style.outline = "1.9px solid rgba(255,0,0,0.75)"
        }     
        
    }
});







// for(let i = 0;i < optionButton.length;i++){
//     optionButton[i].addEventListener('mouseover',()=>{
//         optionButton[i].style.backgroundColor = 'hsl(185, 41%, 84%)';
//         optionButton[i].style.color = 'hsl(183, 100%, 15%)';
//     });
//     optionButton[i].addEventListener('mouseout',()=>{
//         optionButton[i].style.backgroundColor = "hsl(183, 100%, 15%)";
//         optionButton[i].style.color = "white";
//     });
// }