const gridWrapper = document.querySelector('.gridWrapper');
const modeTogglerBtn = document.querySelector('#modeTogglerButton');

const ROWS = 3;
const COLUMNS = 6;
gridWrapper.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;
let mode = false; 


// Initialization
function initCell(idx) {
    const cell = document.createElement('div');
    cell.dataset.indexNumber = idx;

    cell.classList.add('cell');
    cell.classList.add('lightCell');

    cell.addEventListener('click', sendToggleRequest);
    return cell;
}

function initBoard() {
    for (let i = 0; i < ROWS*COLUMNS; i++) {
        gridWrapper.appendChild(initCell(i));
    }
}


// Row and column mode toggling
function toggleMode() {
    mode = !mode;
    modeTogglerBtn.innerHTML = mode ? 'Column' : 'Row';
}

document.addEventListener('keydown', (e) => {
    if (e.repeat || e.key != ' ') return;
    toggleMode();
});

modeTogglerBtn.addEventListener('mouseup', (e) => {
    toggleMode();
});


// Light switching
function toggleLight(idx) {
    console.log(idx);
    const targetCell = document.querySelector(`[data-index-number='${idx}']`);

    targetCell.classList.toggle('darkCell');
    targetCell.classList.toggle('lightCell');
}

function toggleRow(row) {
    for (let col = 0; col < COLUMNS; col++) {
        toggleLight(row*COLUMNS + col);
    }
}

function toggleColumn(col) {
    for (let row = 0; row < ROWS; row++) {
        toggleLight(row*COLUMNS + col);
    }
}

function sendToggleRequest(event) {
    const element = event.srcElement;
    const idx = element.dataset.indexNumber;

    let row = Math.floor(idx/COLUMNS);
    let col = idx % COLUMNS;

    if (mode) toggleColumn(col);
    else toggleRow(row);
}



initBoard();


