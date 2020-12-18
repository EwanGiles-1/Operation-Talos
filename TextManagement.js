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
        //Title.className = "container p"
    }
    else {
        imgToken.className = "dialog img right"
        txtMsg.className = "dialog p right"
        //Title.className = "container p right"
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
        //Title.className = "container p"
    }
    else {
        txtMsg.className = "descrip p right"
        //Title.className = "container p right"
    }
    txtMsg.appendChild(document.createTextNode(text));
    Message.appendChild(txtMsg)
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