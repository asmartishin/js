Array.from(
    document.querySelectorAll(
        ".recocard__metrics :first-child .recocard__number"
    ), 
    x => Number(x.innerText.replace(/ /g,''))
).reduce((a, b) => a + b, 0);
