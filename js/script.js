/*
*    DEVELOPERS :-
*    © SAYANDEEP KARAK    © sayandeep18.webdev@gmail.com    https://github.com/fuchu2003
*    © ARNAB KUMAR DAS    © electroarnab2001@gmail.com    https://github.com/akd2001
*/

/* Clear Local Storage */
document.getElementById('clearStorage').onclick = () => {
    let cnf = confirm('অতো কি আছে যে পরিষ্কার করছো ?');
    if (cnf) {
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
        while(1){
            alert('মহারাজ আপনার নামটা অবশ্যই দরকার');
            do{
                form = prompt("মহারাজ দয়া করে আপনার নামটা দিন",'');
            }while(form === '');
            if(form) break;
        }
        localStorage.setItem('name', form);
        document.getElementById('head').innerText = `Welcome ${form}`;
    } else {
        document.getElementById('head').innerText = `Welcome ${nameValue}`;
    }
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

/* TODO : implement autoColorChange function*/

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

/*
let g = 0;
        let h = parseInt(localStorage.getItem('value'));
        if (typeof (g) == typeof (h)) {
            function cal() {
                h++;
                console.log(parseInt(h));
                localStorage.setItem('value', h);
            }
            // document.getElementById('input').value = "reg";
        }
*/

/*
    //Click counter for ID('count') button.
let clickCount = 1;
if (localStorage.getItem('clickCount')) { //check clickCount is avaliable or not.
    clickCount = parseInt(localStorage.getItem('clickCount')); //convert localStorage clickCount[Str] to Int.
}
*/





//click function for RGB theme
let interval;
let R = 1, G = 1, B = 1;
let a = 1, b = 1, c = 1;
let startButton = document.getElementById("runRgb");

startButton.onclick = () => {
    let countValue = parseInt((localStorage.getItem('value')) ? localStorage.getItem('value'):0);
    
    if (typeof (1) == typeof (countValue)) {
            localStorage.setItem('value', countValue);
            if (countValue % 2 == 0) {
                document.getElementById('runRgb').value = 'Stop RGB';
                let note = 'রাতকানা লাল নীল সবুজ রঙের জন্য আপনি কি তৈরী ? \nবিঃদ্রঃ : রাতকানা লাল নীল সবুজ রঙ অন্ধকার পরিবেশে দেখতে পাবেন';
                let bgValue = localStorage.getItem('color1');
                if (confirm(note)) {
                    let root = document.documentElement;
                    root.style.setProperty('--color', 'black');
                    clearInterval(interval);
                    interval = setInterval(function changeColor() {
                        let root = document.documentElement;
                        root.style.setProperty('--color1', `rgb(${R}, ${G}, ${B})`);
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
                //lets do the stop
                let root = document.documentElement;
                let theme = getComputedStyle(root).getPropertyValue('--color1');;
                localStorage.setItem('color2', theme);
                
                root.style.setProperty('--color1', theme);
              
                document.getElementById('runRgb').value = 'Start RGB';
                clearInterval(interval);
            }
            countValue++;
    }  
};
