const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => {
    console.log({ el })
    return observer.observe(el)
})

let time = document.getElementById('current-time');

setInterval(() =>{
    let d = new Date()
    time.innerHTML = d.toLocaleTimeString();
},1000)

let date = document.getElementById('current-date');
let dd = new Date()
date.innerHTML = dd.toLocaleDateString();

// const locationEl = document.getElementById('location')

// fetch('http://ip-api.com/json/?fields=61439')
//     .then((res) => res.json())
//     .then((res) => {
//         locationEl.textContent = res.city + ', ' + res.country;
//     })


let math = document.getElementById('mathematics');
let currentday = new Date();
let math2 = new Date(currentday.getFullYear(), 2, 14);

if (currentday.getMonth()==2 && currentday.getDate()>14)
{
    math2.setFullYear(math2.getFullYear()+1)
}

const day = 1000*60*60*24;
math.textContent = Math.abs(Math.ceil((math2.getTime()-currentday.getTime())/(day))+366) + ' days left until Maths Day!';