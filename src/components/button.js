import randomcolor from 'randomcolor';

const fontsArr = [
        "Impact,Charcoal,sans-serif",
        "Brush Script MT, cursive",
        "Luminari, fantasy",
        "Comic Sans MS, cursive",
        "American Typewriter, serif"
    ]

    

const beautifierBtn = document.getElementById('beautifierBtn');

beautifierBtn.addEventListener('click', beautify); 

const name = document.getElementById('name');

function beautify () {
    let randomColor = randomcolor();
    name.style.color = randomColor;
    name.style.fontFamily = fontsArr[Math.floor(Math.random()* fontsArr.length)];
    document.body.style.backgroundColor = randomcolor();
    beautifierBtn.style.backgroundColor = randomColor;
    beautifierBtn.style.borderRadius = Math.floor(Math.random()* 50) + "px";
}
