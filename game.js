let time = document.getElementById('current-time');

setInterval(() =>{
    let d = new Date()
    time.innerHTML = d.toLocaleTimeString();
},1000)

let date = document.getElementById('current-date');
let dd = new Date()
date.innerHTML = dd.toLocaleDateString();

let math = document.getElementById('mathematics');
let currentday = new Date();
let math2 = new Date(currentday.getFullYear(), 2, 14);

if (currentday.getMonth()==2 && currentday.getDate()>14)
{
    math2.setFullYear(math2.getFullYear()+1)
}

const day = 1000*60*60*24;
math.textContent = Math.abs(Math.ceil((math2.getTime()-currentday.getTime())/(day))+366) + ' days left until Maths Day!';


let magic = document.getElementById('secret');
let done = document.getElementById('done');
let card1 = document.getElementById('c1').value = 1;
let card2 = document.getElementById('c2').value = 2;
let card3 = document.getElementById('c3').value = 4;
let card4 = document.getElementById('c4').value = 8;
let card5 = document.getElementById('c5').value = 16;
let card6 = document.getElementById('c6').value = 32;

if (done.checked) {
    magic.textContent = '?????' + '. Awesome, right?';
} else {
    magic.textContent = '';
}

console.log(card1.checked);

function uncheckAll (chk) {
    for (i=0; i<chk.length; i++) {
        chk[i].checked = false;
    }
}

