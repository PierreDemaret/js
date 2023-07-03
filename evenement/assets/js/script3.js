const displayCode = (ev) => {
    console.log(` ${ev.which} -> "${ev.key}" `);
    console.log(ev.target.childElementCount);
}


document.addEventListener('keyup', displayCode)