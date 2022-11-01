let time = document.getElementById('current-time');

setInterval(() =>{
    time.innerHTML = new Date().toLocaleTimeString();
},10)

let date = document.getElementById('current-date');
date.innerHTML = new Date().toLocaleDateString();

let math = document.getElementById('mathematics');
let currentday = new Date();
let math2 = new Date(currentday.getFullYear(), 2, 14);

if (currentday.getMonth()==2 && currentday.getDate()>14)
{
    math2.setFullYear(math2.getFullYear()+1)
}

const day = 1000*60*60*24;
math.textContent = Math.abs(Math.ceil((math2.getTime()-currentday.getTime())/(day))+366) + ' days left until Maths Day!';