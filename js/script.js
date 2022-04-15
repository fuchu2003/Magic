/* color load from local storage */

document.body.onload = () => {
    let back = localStorage.getItem('color1');
    let them = localStorage.getItem('color2');

    /* if value null return default value else set the actual value */

    if (back == null) {
        let root = document.documentElement;
        root.style.setProperty('--color', '#000');
        document.getElementById('colorVal').value = "#000";
    } else {
        let root = document.documentElement;
        root.style.setProperty('--color', back);
        document.getElementById('colorVal').value = back;
    }
    if (them == null) {
        let root = document.documentElement;
        root.style.setProperty('--color1', '#03e9f4');
        document.getElementById('colorVal1').value = "#03e9f4";
    } else {
        let root = document.documentElement;
        root.style.setProperty('--color1', them);
        document.getElementById('colorVal').value = them;
    }
};

/* open popup box8 */
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let colorDiv = document.getElementById('color');
    colorDiv.style.cssText = "display:flex;";
});

/* auto color change */
function autoColorChange(element, time) {
    let a = 1, b = 1, c = 1;
    let R = 1, G = 1, B = 1;
    //use var because clearInterval requried interval object name.
    interval = setInterval(function colorChange() {
        document.getElementById(element).style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        if (R <= 0 || R >= 255) a = -a;
        if (G <= 0 || G >= 255) b = -b;
        if (B <= 0 || B >= 255) c = -c;
        if (R >= 50) G += b;
        if (G >= 50) B += c;
        R += a;
        console.log(time);
    }, time);
}

let opt = document.getElementById('speed');
//backup of id(speed) element value.
let val = parseInt(document.getElementById('speed').value);
opt.oninput = () => {
    //current value of id(speed) element.
    const optValue = parseInt(document.getElementById('speed').value);
    //check backup value[val] & current value are equal or not.
    //arnab kumar das
    if (val !== optValue) {
        //clearInterval of interval object inside autoColorChange function
        clearInterval(interval);
        val = optValue;
    }
    autoColorChange('color', optValue);
};


/* background color change and set up to localStorage */
document.getElementById('colorVal').oninput = () => {

    let bg = document.getElementById('colorVal').value;
    localStorage.setItem('color1', bg);
    let root = document.documentElement;
    root.style.setProperty('--color', bg);
};

/*  color change and set up to localStorage */
document.getElementById('colorVal1').oninput = () => {


    let theme = document.getElementById('colorVal1').value;
    localStorage.setItem('color2', theme);
    let root = document.documentElement;
    root.style.setProperty('--color1', theme);
};

//  close button 
document.getElementById('close').onclick = () => {
    document.getElementById('color').style.display = "none";
};


// click function for RGB theme
document.getElementById('runRgb').onclick = () => {


    let note = 'Are sure for apply Rgb Theme ? \nNote : RGB theme can only apply in Black Background';



    let bgValue = localStorage.getItem('color1');

    if (confirm(note) == true) {

        if (bgValue == '#000000') {

            let a = 1, b = 1, c = 1;
            let R = 1, G = 1, B = 1;
            setInterval(function changeColor() {
                let root = document.documentElement;
                root.style.setProperty('--color1', `rgb(${R}, ${G}, ${B})`);
                if (R <= 0 || R >= 255) a = -a;
                if (G <= 0 || G >= 255) b = -b;
                if (B <= 0 || B >= 255) c = -c;
                if (R >= 50) G += b;
                if (G >= 50) B += c;
                R += a;
            }, 80);
        } else {
            alert('Try again ! must set up Dark background !!!!');
        }
    }
}

