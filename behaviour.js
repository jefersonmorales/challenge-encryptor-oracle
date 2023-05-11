var btnEncrypt = document.querySelector(".btn-encrypt");
var btnUnencrypt = document.querySelector(".btn-unencrypt");
var boxDraftAnimated = document.querySelector(".first-page");
var textResult = document.querySelector(".msg-converted");
var boxMsgResult = document.querySelector(".msg-result");
var boxText = document.querySelector(".text-area");

btnEncrypt.onclick = encrypt;
btnUnencrypt.onclick = unencrypt;

hideBoxTextConverted();

function comprobateLength() {
  if(boxText.value.length > 0) {
    alert("It's ok")
  } else if(boxText.value.length == 0) {
    alert("put any msg")
  }
}

function encrypt() {
  hideBoxContent();
  showMsgConvertedContainer();
  var boxText = recoverText()
  textResult.textContent = encryptText(boxText);
}

function unencrypt() {
  hideBoxContent();
  var boxText = recoverText()
  textResult.textContent = unencryptText(boxText);
}

function hideBoxContent() {
  boxDraftAnimated.classList.add("hider");
}

function hideBoxTextConverted() {
  boxMsgResult.classList.add("hider");
}

function showMsgConvertedContainer() {
  boxMsgResult.classList.remove("hider");
}

function recoverText() {
  boxText = boxText
  return boxText.value;
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
  var copyText = document.getElementById("msg-result-converted");

  copyText.select();
  copyText.setSelectionRange(0, -1);
  navigator.clipboard.writeText(copyText.value);

}