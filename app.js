const generateButton = document.querySelector('.button-generate');
const tableContainer = document.querySelector('.table-container');

const table = document.createElement('table');
tableContainer.appendChild(table);

const tableHead = document.createElement('thead');
table.appendChild(tableHead);
const tableBody = document.createElement('tbody');
table.appendChild(tableBody);




const getFonts = () => {
    const selectTag = document.querySelector('#font-family');

    const url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDp_ellK58ILgpgUChEzF8lnJ4ndUpZomo'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data.items)
            for (const font of data.items) {
                let { family } = font
                //console.log(family)
                const option = document.createElement('option');
                option.textContent = family
                selectTag.appendChild(option)                         
            }
        })
}

getFonts();


const getTable = () => {
    const rowInput = document.querySelector('#rows');
    const columnInput = document.querySelector('#columns');

    for (let i=0; i<rowInput.value; i++) {    
        const row = document.createElement('tr');

        for (let j=0; j<columnInput.value; j++) {
            const cell = document.createElement('td');
            row.append(cell);
            cell.textContent = "cell"; 
        }

        //console.log("getTable() printing userInput.value", userInput.value) 
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    tableContainer.appendChild(table)
}

const setTableWidth = () => {
    const userInput = document.querySelector('#width');
    //table.style.width = `${userInput.value}`+"%;"
    table.style.width = "80%;"
}

const setTableBorderWidth = () => {
    const userInput = document.querySelector('#border-width');
    table.style.borderWidth = `${userInput.value}`+"px;"
}

const setTableBackground = () => {
    const userInput = document.querySelector('#table-background');
    table.style.backgroundColor = `${userInput.value}`+";"
}

// const setHeadBackground = () => {    
//     const userInput = document.querySelector('#head-background');
//     table.style.backgroundColor = `${userInput.value}`+";"
// }

// const setBodyBackground = () => {    
//     const userInput = document.querySelector('#body-background');
//     table.style.backgroundColor = `${userInput.value}`+";"
// }

const setBorderColor = () => {
    const userInput = document.querySelector('#border-color');
    table.style.borderColor = `${userInput.value}`+";"
}

const setFontColor = () => {
    const userInput = document.querySelector('#font-color');
    table.style.color = `${userInput.value}`+";"
}

const setBorderCollapse = () => {

}

const setFontFamily = () => {
    const userInput = document.querySelector('#font-family');
    table.style.fontFamily = `${userInput.value}`+";"
}

const setFontWeight = () => {
    const userInput = document.querySelector('#font-weight');
    table.style.fontWeight = `${userInput.value}`+";"
}

const setTextAlign = () => {
    const userInput = document.querySelector('#text-align');
    table.style.textAlign = `${userInput.value}`+";"
}

const setFontSize = () => {
    const userInput = document.querySelector('#font-size');
    table.style.fontSize = `${userInput.value}`+"px;"
}

generateButton.addEventListener('click', () => {
    console.log("generate click")
    getTable();
    setTableWidth();
    setTableBorderWidth();
    setTableBackground();
    setBorderColor();
    setFontColor();
    //setBorderCollapse();
    setFontFamily();
    setFontWeight();
    setTextAlign();
    setFontSize();
})


