
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
    Title.innerText = Name + "\n";
    txtMsg.appendChild(Title)
    txtMsg.appendChild(document.createTextNode(text));
    Message.appendChild(imgToken)
    Message.appendChild(txtMsg)
    liLine.appendChild(Message)
    document.querySelector('#console').appendChild(liLine)
}
/*Print Function rundown
 * Split text by a character into each "Dialog"
 * Split again into each Dialog's features (Time delay, Characteristics ect.)
 * First split determines what the dialog is (Speech, Description ect.)
 * If dialog is speech second split is Character ID which determines name, icon ect.
 * The final entry will be the text
 * 
 */
function Print(input) {
    var Character = [["image", "debug"], ["Carpenter", "Jack"], ["Gene", "Gene"], ["Jumbo", "Aaren"], ["Boss", "McKenzie"]]
    var Array = input.split('¦')
    var Dialog = []
    for (i = 0; i < Array.length; ++i) {
        var Split = Array[i].split('¬')
        Dialog.push(Split)
    }
    /* Dialog Type Chart
     * 0 = Speech
     * 1 = Description
     * 2 = Special (Unused)
     */
    for (i = 0; i < Dialog.length; ++i) {
        var newLine = document.createElement("li")
        var Divider = document.createElement("div")
        var Text = document.createElement("p")
        var Content = document.createElement("span")
        if (Dialog[i][0] == 0) {
            // Speech
            // Type¬Name¬Orientation¬Text¬Delay
            var Image = document.createElement("img");
            Image.src = "Icons/" + Character[Dialog[i][1]][0] + ".png"
            var Title = document.createElement("span")
            Title.innerText = Character[Dialog[i][1]][0] + "\n";
            Text.appendChild(Title)
            Content.innerText = Dialog[i][3]
            Text.appendChild(Content)
            if (Dialog[i][3] == "left") {
                //left

            }
            else if (Dialog[i][3] == "right") {
                //right

            }
            else {
                //center

            }
            Divider.appendChild(Image)
            Divider.appendChild(Text)
            newLine.appendChild(Divider)
            document.querySelector('#console').appendChild(newLine)
            
        }
        else if (Dialog[i][0] == 1) {
            //Description
            //Type¬Orientation¬Text¬Delay
            Content.innerText = Dialog[i][2]
            Text.appendChild(Content)
            if (Dialog[i][2] == "left") {
                //left

            }
            else if (Dialog[i][2] == "right") {
                //right

            }
            else {
                //center

            }
            Divider.appendChild(Text)
            newLine.appendChild(Divider)
            document.querySelector('#console').appendChild(newLine)
        }
        else {
            //Special

        }
    }
}