function Dialog(Name, text, image, side) {
    document.getElementsByTagName('input')[0].value = "";
    var liLine = document.createElement("li");
    var Message = document.createElement("div")
    Message.className = "dialog"
    var imgToken = document.createElement("img");
    imgToken.src = image;
    var Title = document.createElement("span")
    var txtMsg = document.createElement("p")
    if (side == "left") {
        imgToken.className = "dialog img"
        txtMsg.className = "dialog p"
    }
    else {
        imgToken.className = "dialog img right"
        txtMsg.className = "dialog p right"
    }
    Title.style.fontSize = "25px"
    Title.style.lineHeight = "1.2"
    Title.style.color = "#dbe4e7"
    Title.innerText = Name+"\n";
    txtMsg.appendChild(Title)
    txtMsg.appendChild(document.createTextNode(text));
    Message.appendChild(imgToken)
    Message.appendChild(txtMsg)
    liLine.appendChild(Message)
    document.querySelector('#console').appendChild(liLine)
}
function Description(text, side) {
    document.getElementsByTagName('input')[0].value = "";
    var liLine = document.createElement("li");
    var Message = document.createElement("div")
    Message.className = "descrip"
    var txtMsg = document.createElement("p")
    if (side == "left") {
        txtMsg.className = "descrip p"
    }
    else {
        txtMsg.className = "descrip p right"
    }
    txtMsg.appendChild(document.createTextNode(text));
    Message.appendChild(txtMsg)
    liLine.appendChild(Message)
    document.querySelector('#console').appendChild(liLine)
}
function Option(text) {
    document.getElementsByTagName('input')[0].value = "";
    var liLine = document.createElement("li");
    var Message = document.createElement("div")
    var option = document.createElement("button")
    option.className = "option button"
    option.appendChild(document.createTextNode(text));
    option.addEventListener("click", function () { Dialog("Click", "I have been clicked", "image.png", "left"); })
    Message.appendChild(option)
    liLine.appendChild(Message)
    document.querySelector('#console').appendChild(liLine)
}
// On enter key pressed, run myBtn.click() event
var input = document.getElementById("txtInput");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
})