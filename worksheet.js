function writeCells(text) {
    document.write(stringToCells(text));
}

function stringToCells(text) {
    return text.split('').map(charToCell).join('');
}

function charToCell(c) {
    if (c === ',') {
        return `<td class="dot">${c}</td>`;
    }

    if (c === ' ') {
        c = '&nbsp;';
    }
    
    return `<td>${c}</td>`
}

function makeBlanks(cipherText, plainText, dontFloat) {
    if (!cipherText) {
        var cipherTextCells = [...Array(plainText.length).keys()].map(_ => '<td>&nbsp;</td>').join('');
    } else if (cipherText.length !== plainText.length) {
        throw "lengths do not match!";
    } else {
        var cipherTextCells = stringToCells(cipherText);
    }
    var plainTextCells = stringToCells(plainText);
    
    document.write(`<table class="float-left">
<tbody>
<tr class="cipher-text">
${cipherTextCells}
</tr>
<tr class="plain-text">
${plainTextCells}
</tr>
</tbody>
</table>`);
}