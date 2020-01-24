const generateButton = document.querySelector('.button-generate');
const tableContainer = document.querySelector('.table-container');

const table = document.createElement('table');

const tableHead = document.createElement('thead');
table.appendChild(tableHead);
const tableBody = document.createElement('tbody');
table.appendChild(tableBody);



const getFonts = () => {
    const selectTag = document.querySelector('#font-family');
    const firstOption = document.createElement('option');
    const div = document.createElement('div');
    firstOption.appendChild(div);
    div.textContent = "-- select font --";
    div.style.textContent = "center";
    selectTag.appendChild(firstOption)

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
//WORKS 
const setTableWidth = () => {
    const userInput = document.querySelector('#width');

    if (userInput.value == "") {
        table.style.width = "100%"
    } else {
        table.style.width = `${userInput.value}%`
    }
    table.style.alignSelf = "center";
}

const setTableBorderWidth = () => {
    const userInput = document.querySelector('#border-width');

    if (userInput.value == "") {
        table.style.borderWidth = "2px"

    } else {
        table.style.borderWidth = `${userInput.value}px`

    }
}

const setTableBackground = () => {
    const userInput = document.querySelector('#table-background');

    if (userInput.value == "") {
        table.style.backgroundColor = "white;"
    } else {
        table.style.backgroundColor = `${userInput.value}`
    }

}

// const setHeadBackground = () => {    
//     const userInput = document.querySelector('#head-background');
//     table.style.backgroundColor = `${userInput.value}`
// }

// const setBodyBackground = () => {    
//     const userInput = document.querySelector('#body-background');
//     table.style.backgroundColor = `${userInput.value}`
// }

const setBorderColor = () => {
    const userInput = document.querySelector('#border-color');

    if (userInput.value == "") {
        table.style.borderColor = "black"
    } else {
        table.style.borderColor = `${userInput.value}`
    }
}
//WORKS
const setFontColor = () => {
    const userInput = document.querySelector('#font-color');

    if (userInput.value == "") {
        table.style.color = "black"
    } else {
        table.style.color = `${userInput.value}`
    }
}

const setBorderCollapse = () => {
    if (document.querySelector('#collapse') = true) {
        table.style.borderCollapse = "collapse"
    } else {
        table.style.setBorderCollapse = "seperate"
    }
}
// FIX !!!
const setFontFamily = () => {
    const userInput = document.querySelector('#font-family');

    if (userInput.value == "-- select font --") {
        table.style.fontFamily = "Times New Roman"
    } else {
        tableBody.style.fontFamily = `${userInput.value}`
    }
}

//WORKS
const setFontWeight = () => {
    const userInput = document.querySelector('#font-weight');
    table.style.fontWeight = `${userInput.value}`
}
//WORKS
const setTextAlign = () => {
    const userInput = document.querySelector('#text-align');

    if (userInput.value == "") {
        table.style.textAlign = "center"
    } else {
        table.style.textAlign = `${userInput.value}`.toLocaleLowerCase();
    }
}
//WORKS
const setFontSize = () => {
    const userInput = document.querySelector('#font-size');
    table.style.fontSize = `${userInput.value}px`
}

generateButton.addEventListener('click', () => {
    tableContainer.textContent = ''
    getTable();
    setTableWidth();
    setTableBorderWidth();
    setTableBackground();
    setBorderColor();
    setFontColor();
    setBorderCollapse();
    setFontFamily();
    setFontWeight();
    setTextAlign();
    setFontSize();

})


