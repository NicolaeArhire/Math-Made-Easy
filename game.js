let time = document.getElementById('current-time');

setInterval(() =>{
    let d = new Date()
    time.innerHTML = d.toLocaleTimeString();
},1000);

let date = document.getElementById('current-date');
let dd = new Date()
date.innerHTML = dd.toLocaleDateString();

let math = document.getElementById('mathematics');
let currentday = new Date();
let math2 = new Date(currentday.getFullYear(), 2, 14);

if (currentday.getMonth()==2 && currentday.getDate()>14)
{
    math2.setFullYear(math2.getFullYear()+1);
};

const day = 1000*60*60*24;
math.textContent = Math.abs(Math.ceil((math2.getTime()-currentday.getTime())/(day))+366) + ' days left until Maths Day!';


let magic = document.getElementById('secret');
let gif = document.createElement('img');

function showAnswer() {
    let boxCheck = document.getElementsByClassName("checkbox");
    let total=0;
    for (let i=0; i < boxCheck.length; i++) {
        if (parseInt(boxCheck[i].value) && boxCheck[i].checked)
            total += parseInt(boxCheck[i].value);
    }
    magic.textContent = total;
    document.getElementById("gif").style.display = 'none';

        if(document.querySelectorAll('input[type="checkbox"]:checked').length == 0) {
        magic.textContent = "(please select at least one card)";
        document.getElementById("gif").style.display = 'none';
    }
};

function deleteAnswer(uncheckBoxes) {
    let verifyBoxes = document.getElementsByClassName("checkbox");
        for (let i = 0; i < verifyBoxes.length; i++) {
            verifyBoxes[i].checked = uncheckBoxes;
        }
    magic.textContent = '';
    document.getElementById("gif").style.display = 'flex';
    document.getElementById("gif").style.width = "35";
};

// let element = document.querySelectorAll(".nav-link");

// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("c1").style.color = "red";
// }