// console.log('Hello World');

let turn = 'Player-1';

function turnChanger() {
    let out = turn == 'Player-1' ? 'Player-2' : 'Player-1';
    document.getElementById('guiderText').innerText = `${out} Chance`;
    return out;
};


for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
        document.getElementById(`${i}${j}`).addEventListener('click', () => {
            if (turn == 'Player-1' & document.getElementById(`${i}${j}`).innerHTML == '') {
                document.getElementById(`${i}${j}`).innerHTML = `<img class="image" src="cross.png" alt="Cross">`;
                let ck1 = checker();
                ck1 == 'match' ? null : (turn = turnChanger());
            }
            else if (turn == 'Player-2' & document.getElementById(`${i}${j}`).innerHTML == '') {
                document.getElementById(`${i}${j}`).innerHTML = `<img class="image" src="nut.png" alt="Nut">`;
                let ck2 = checker();
                ck2 == 'match' ? null : (turn = turnChanger());
            }
        });
    };
};


let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    Reset();
});


function checker() {
    let c11 = document.getElementById(`11`).children.length == 0 ? 'cell11' : document.getElementById(`11`).children[0].alt;
    let c12 = document.getElementById(`12`).children.length == 0 ? 'cell12' : document.getElementById('12').children[0].alt;
    let c13 = document.getElementById(`13`).children.length == 0 ? 'cell13' : document.getElementById('13').children[0].alt;
    let c21 = document.getElementById(`21`).children.length == 0 ? 'cell21' : document.getElementById('21').children[0].alt;
    let c22 = document.getElementById(`22`).children.length == 0 ? 'cell22' : document.getElementById('22').children[0].alt;
    let c23 = document.getElementById(`23`).children.length == 0 ? 'cell23' : document.getElementById('23').children[0].alt;
    let c31 = document.getElementById(`31`).children.length == 0 ? 'cell31' : document.getElementById('31').children[0].alt;
    let c32 = document.getElementById(`32`).children.length == 0 ? 'cell32' : document.getElementById('32').children[0].alt;
    let c33 = document.getElementById(`33`).children.length == 0 ? 'cell33' : document.getElementById('33').children[0].alt;

    if (c11 == c22 & c11 == c33 | c13 == c22 & c13 == c31 | c11 == c12 & c11 == c13 | c21 == c22 & c21 == c23 | c31 == c32 & c31 == c33 | c11 == c21 & c11 == c31 | c12 == c22 & c12 == c32 | c13 == c23 & c13 == c33) {
        alert(`${turn} Won!`);
        Reset();
        return 'match';
    }
};


function Reset() {
    Array.from(document.getElementsByClassName('cell')).forEach(element => {
        element.innerHTML = '';
    })
    turn = 'Player-1';
    document.getElementById('guiderText').innerText = `Player-1 Chance`;
};
