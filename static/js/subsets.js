const ROWS = 9;
const gridWrapper = document.querySelector('.gridWrapper');
const numberEl = document.querySelector('#number');
gridWrapper.style.gridTemplateRows = `repeat(${ROWS}, 81px)`;


function initRow() {
    const row = document.createElement('div');
    row.classList.add('row');
    return row;
}


function initCell(i, j) {
    const cell = document.createElement('div');
    cell.dataset.i = i;
    cell.dataset.j = j;
    
    cell.classList.add('cell');
    cell.classList.add('lightCell');

    if (i == 0) {
        cell.addEventListener('click', sendToggleRequest);
    }
    return cell;
}

function toggleCell(i, j) {
    const targetCell = document.querySelector(`[data-i="${i}"][data-j="${j}"]`);
    
    numberEl.innerHTML = 1 + parseInt(numberEl.innerHTML) - 2 * targetCell.classList.contains('darkCell');
    targetCell.classList.toggle('darkCell');
    targetCell.classList.toggle('lightCell');
}

function initBoard() {
    for (let i = 0; i < ROWS; i++) {
        let row = initRow();
        for (let j = 0; j < ROWS-i; j++) {
            row.appendChild(initCell(i, j));
        }
        console.log(row);
        gridWrapper.appendChild(row);
    }
}

function sendToggleRequest(event) {
    const element = event.srcElement;
    const J = element.dataset.j;

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < ROWS-i; j++) {
            let upper = j+i;
            if (j <= J && J <= upper) {
                toggleCell(i, j);
            }
        }
    }

}


initBoard();