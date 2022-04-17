/*
*    DEVELOPERS :-
*    © SAYANDEEP KARAK    © sayandeep18.webdev@gmail.com    https://github.com/fuchu2003
*    © ARNAB KUMAR DAS    © electroarnab2001@gmail.com    https://github.com/akd2001
*/
/* Clear Local Storage */
document.getElementById('clearStorage').onclick = () => {
    if (confirm('অতো কি আছে যে পরিষ্কার করছো ?')) {
        localStorage.clear();
        location.reload();
    }
};
/* name and color load from local storage */
document.body.onload = () => {
    const nameValue = localStorage.getItem('name');
    let form;
    if (!nameValue) {
        //open input prompt until user inuput some text.
        while (1) {
            alert('মহারাজ আপনার নামটা অবশ্যই দরকার');
            do {
                form = prompt("মহারাজ দয়া করে আপনার নামটা দিন", '');
            } while (form === '');
            if (form) break;
        }
        localStorage.setItem('name', form);
        document.getElementById('head').innerText = `Welcome ${form}`;
    } else {
        document.getElementById('head').innerText = `Welcome ${nameValue}`;
    }
    let back = localStorage.getItem('color1');//BG
    let them = localStorage.getItem('color2');//Theme
    /* if value null return default value else set the actual value */
    if (back) {
        let root = document.documentElement;
        root.style.setProperty('--color', '#000');
        document.getElementById('colorVal').value = "#000";
    } else {
        let root = document.documentElement;
        root.style.setProperty('--color', back);
        document.getElementById('colorVal').value = back;
    }
    if (!them) {
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
document.querySelector('button').addEventListener('click', () => {
    let colorDiv = document.getElementById('color');
    colorDiv.style.cssText = "display:flex;";
});
/* background color change and set up to localStorage */
document.getElementById('colorVal').oninput = () => {
    let bg = document.getElementById('colorVal').value;
    localStorage.setItem('color1', bg);
    document.documentElement.style.setProperty('--color', bg);
};
/*  color change and set up to localStorage */
document.getElementById('colorVal1').oninput = () => {
    let theme = document.getElementById('colorVal1').value;
    localStorage.setItem('color2', theme);
    document.documentElement.style.setProperty('--color1', theme);
};
//  close button 
document.getElementById('close').onclick = () => {
    document.getElementById('color').style.display = "none";
};
//click function for RGB theme
let interval;
let a = 1, b = 1, c = 1;
let R = 1, G = 1, B = 1;
let countValue = parseInt((localStorage.getItem('value')) ? localStorage.getItem('value') : 0); //Click counter
document.getElementById("runRgb").onclick = () => {
        localStorage.setItem('value', countValue);
        if (countValue % 2 == 0) {
            document.getElementById('runRgb').value = 'Stop Aniamtion';
            let note = 'রাতকানা লাল নীল সবুজ রঙের জন্য আপনি কি তৈরী ? \nবিঃদ্রঃ : রাতকানা লাল নীল সবুজ রঙ অন্ধকার পরিবেশে দেখতে পাবেন';
            if (confirm(note)) {
                document.documentElement.style.setProperty('--color', 'black');
                clearInterval(interval);
                interval = setInterval(()=>{
                    document.documentElement.style.setProperty('--color1', `rgb(${R}, ${G}, ${B})`);
                    if (R <= 0 || R >= 255) a = -a;
                    if (G <= 0 || G >= 255) b = -b;
                    if (B <= 0 || B >= 255) c = -c;
                    if (R >= 50) G += b;
                    if (G >= 50) B += c;
                    R += a;
                }, 90);
            }
            else {
                alert('ভাত মুড়ি খেয়ে চেষ্টা করুন !!!!!!!!');
            }
        } else {
            // animation stop and set theme color
            let root = document.documentElement;
            let theme = getComputedStyle(root).getPropertyValue('--color1');
            localStorage.setItem('color2', theme);
            root.style.setProperty('--color1', theme);
            document.getElementById('runRgb').value = 'Start Aniamtion';
            clearInterval(interval);
        }
        countValue++;
};
