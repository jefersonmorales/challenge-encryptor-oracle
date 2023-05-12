var btnEncrypt = document.querySelector(".btn-encrypt");
var btnUnencrypt = document.querySelector(".btn-unencrypt");
var missingTextContainer = document.querySelector(".missing-text-container");
var textConverted = document.querySelector(".text-converted");
var textConvertedContainer = document.querySelector(".text-converted-container");
var inputUserText = document.querySelector(".input-text");

btnEncrypt.onclick = encrypt;
btnUnencrypt.onclick = unencrypt;

hideTextConvertedContainer();

function encrypt() {
  hideMissingTextContainer();
  showTextConvertedContainer();
  var inputUserText = recoverText()
  textConverted.textContent = encryptText(inputUserText);
}

function unencrypt() {
  hideMissingTextContainer();
  var inputUserText = recoverText()
  textConverted.textContent = unencryptText(inputUserText);
}

function hideMissingTextContainer() {
  missingTextContainer.classList.add("hider");
}

function hideTextConvertedContainer() {
  textConvertedContainer.classList.add("hider");
}

function showTextConvertedContainer() {
  textConvertedContainer.classList.remove("hider");
}

function recoverText() {
  inputUserText = inputUserText
  return inputUserText.value;
}

function encryptText(message) {
  var text = message;
  var finalText = "";

  for(var i = 0; i < text.length; i++) {
    if(text [i] == "a") {
      finalText = finalText + "ai"
    } else if (text[i] == "e") {
      finalText = finalText + "enter"
    } else if (text[i] == "i") {
      finalText = finalText + "imes"
    } else if (text[i] == "o") {
      finalText = finalText + "ober"
    } else if (text[i] == "u") {
      finalText = finalText + "ufat"
    } else {
      finalText = finalText + text[i]
    }
  }

  return finalText;
}

function unencryptText(message) {
  var text = message;
  var finalText = "";

  for(var i = 0; i < text.length; i++) {
    if(text[i] == "a") {
      finalText = finalText + "a"
      i = i+1;
    } else if (text[i] == "e") {
      finalText = finalText + "e"
      i = i+4;
    } else if (text[i] == "i") {
      finalText = finalText + "i"
      i = i+3;
    } else if (text[i] == "o") {
      finalText = finalText + "o"
      i = i+3;
    } else if (text[i] == "u") {
      finalText = finalText + "u"
      i = i+3;
    } else {
      finalText = finalText + text[i]
    }
  }
  return finalText;
}

function btnCopy() {
  var copyText = document.getElementById("text-converted");

  copyText.select();
  copyText.setSelectionRange(0, -1);
  navigator.clipboard.writeText(copyText.value);
}