gsap.from('#slideDown', 1, {
        opacity: 0,
        y: -50,
        delay: 0.5
    })

let text = "Пепс | Или просто Андрей";
let i = 0;
let speed = 40;

function type() {
    if (i < text.length) {
        document.querySelector('.name').textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
setTimeout(type, 1500);

let newColor = ["#000000"]
gsap.from(".paper", {opacity:0, duration: 5, delay: 1, color: newColor}) 

gsap.from('#slideUp', 1, {
        opacity: 0,
        y: 70,
        delay: 1
    })

