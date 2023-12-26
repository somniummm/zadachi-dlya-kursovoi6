let toe = document.querySelector('.toe'),
    colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 204)"],
    h1 = document.querySelector('h1'),
    count = 0;
for (let i = 0; i < 9; i++) {
    toe.innerHTML += "<div class='block' pos=" + i +"></div>"; 
}

let block = document.querySelectorAll('.block')

function chickWin() {
    let color = block[0].style.background
    for(let i of block){
        if (color !== i.style.background) {
            return false
        }
    }
    return true
}

function reload() {
    setInterval(() => {
        window.location.reload();
    }, 2000);
    toe.onclick = null;
}

function render(colors) {
    return rand = colors[Math.floor(Math.random() * colors.length)]
}

function nextColor(back) {
    return((colors.indexOf(back) + 1) % colors.length); 
}

let pos = document.querySelectorAll('.block');
for (let i = 0; i < pos.length; i++) {
    pos[i].style.background = render(colors);
}

toe.onclick = (e)=>{

    if (e.target.classList.contains('block')) {
        count++;
        h1.textContent = count;
        let background = e.target.style.background;
        e.target.style.background = colors[nextColor(background)]
    }       
    if (chickWin()) {
        reload();
        setInterval(() => {
            alert('Победа ваши ходы', count)
        }, 1000);
    };
}