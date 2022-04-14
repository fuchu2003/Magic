document.body.onload = () => {
    let back = localStorage.getItem('color1');
    let them = localStorage.getItem('color2');

    if (back == null) {
        let root = document.documentElement;
        root.style.setProperty('--color', '#000');
    } else {
        let root = document.documentElement;
        root.style.setProperty('--color', back);
    }
    if (them == null) {
        let root = document.documentElement;
        root.style.setProperty('--color1', '#03e9f4');
    } else {
        let root = document.documentElement;
        root.style.setProperty('--color1', them);
    }
};


let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let colorDiv = document.getElementById('color');
    colorDiv.style.cssText = "display:flex;"
})



let a = 1, b = 1, c = 1;
let R = 1, G = 1, B = 1;
setInterval(function changeColor() {
    document.getElementById('color').style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    if (R <= 0 || R >= 255) a = -a;
    if (G <= 0 || G >= 255) b = -b;
    if (B <= 0 || B >= 255) c = -c;
    if (R >= 50) G += b;
    if (G >= 50) B += c;
    R += a;
}, 100);



document.getElementById('colorVal').oninput = () => {

    let bg = document.getElementById('colorVal').value;
    localStorage.setItem('color1', bg);
    let root = document.documentElement;
    root.style.setProperty('--color', bg);
}

document.getElementById('colorVal1').oninput = () => {


    let theme = document.getElementById('colorVal1').value;
    localStorage.setItem('color2', theme);
    let root = document.documentElement;
    root.style.setProperty('--color1', theme);
}

document.getElementById('close').onclick = () => {
    document.getElementById('color').style.display = "none";
}


