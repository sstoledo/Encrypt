const btnCopy = document.getElementById("btn_copy");
const btnCrypt = document.getElementById("btn_encrypt");
const btnDecrypt = document.getElementById("btn_decrypt");
const btnClean = document.getElementById("btn_delete");

btnCrypt.addEventListener("click", crypt);
function crypt() {
    const text = getText();
    const encrypted = encrypt(text);
    if (!validate(text)) {
        return;
    }
    updateView(encrypted);
}

function getText() {
    return document.getElementById("text").value.trim();
}

function encrypt(text) {
    let textCoded = text
        .replace(/e/gim, "enter")
        .replace(/i/gim, "imes")
        .replace(/a/gim, "ai")
        .replace(/o/gim, "ober")
        .replace(/u/gim, "ufat");
    return textCoded;
}

function updateView(textCoded) {
    document.getElementById("tittle_copy").textContent = textCoded;
    document.getElementById("paragraph_copy").textContent = "Success";
    document.getElementById("img_doll").style.display = "none";
    document.getElementById("error_text").textContent = "Only lower case letters and without accent";
}
function emptyText() {
    document.getElementById("error_text").textContent = "Enter text";
    document.getElementById("error_text").style.cssText = "color: red; font-weight:bold";
}

function validate(text) {
    if (/[áéíóúÁÉÍÓÚ]/.test(text) || /[A-Z]/.test(text)) {
        return false;
    } else if (text === "") {
        emptyText();
        return false;
    }
    else {
        return true;
    }
}

function unencrypt(text) {
    let textDecoded = text
        .replace(/imes/gim, "i")
        .replace(/ai/gim, "a")
        .replace(/enter/gim, "e")
        .replace(/ober/gim, "o")
        .replace(/ufat/gim, "u");
    return textDecoded;
}

function decrypt() {
    const text = getText();
    const encrypted = unencrypt(text);
    if (!validate(text)) {
        return;
    }
    updateView(encrypted);
}
btnDecrypt.addEventListener("click", decrypt);

async function copy() {
    let tittleText = document.getElementById("tittle_copy");
    try {
        await navigator.clipboard.writeText(tittleText.textContent);
        alert("Text copied");
    } catch (err) {
        console.log(err);
    }
}
btnCopy.addEventListener("click", copy);

function clean() {
    let input = document.getElementById("text");
    let tittle = document.getElementById("tittle_copy");
    let para = document.getElementById("paragraph_copy");
    document.getElementById("img_doll").style.display = "flex";
    document.getElementById("error_text").textContent = "Only lower case letters and without accent";
    document.getElementById("error_text").style.cssText = "color: black; font-weight:400";
    input.value = "";
    tittle.textContent = "No message was found";
    para.textContent = "Enter the text you wish to encrypt or decrypt";
}
btnClean.addEventListener("click", clean);
