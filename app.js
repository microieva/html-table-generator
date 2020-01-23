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



