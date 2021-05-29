/*
        if (event.keyCode === 8 && textEntry.length > 0) {
            textEntry = textEntry.substr(0, textEntry.length - 1);
        }
        else if (event.keyCode === 32 || (event.keyCode >= 61 && event.keyCode < 90)) {
            textEntry += event.key;
        }
        else if (event.keyCode === 13) {
            if (textEntry.replace(/^ +/i, '').length > 0) {
                textUserInputDisplay += wordWrap(textEntry,LineX) + '\n' + '-'.repeat,LineX) + '\n'
                //Do Thing(textEntry)
                CommandCycle(textEntry)
            }
            textEntry = ''
        }
        textRaw = (textUserInputDisplay + wordWrap(textEntry,LineX)).split(/\r\n|\r|\n/)
        curLine = textRaw.length
        textUpdate(Text)
        //Text.text = (textRaw.slice(Math.max(textRaw.length -,LineX, 0)).join('\n'))
        */

function USERtextInput(keyEvent,origTextRAW) {
    Output = origTextRAW
    edit = origTextRAW[origTextRAW.length - 1]
    if (keyEvent.keyCode === 8 && edit.length > 0) { //Backspace
        edit = edit.substr(0,edit.length - 1)
        Output[origTextRAW.length - 1] = edit
    }
    else if (keyEvent.keyCode === 32 || (keyEvent.keyCode >= 61 && keyEvent.keyCode < 90)) { //Regular key input
        edit += keyEvent.key
        Output[origTextRAW.length - 1] = edit
    }
    else if (keyEvent.keyCode === 13) { //Enter Key
        if (edit.replace(/^ +/i, '').length > 0) { //Whitespace check
            if (CommandCycle(edit)) { //Run Command input of string
            }
            else {
                Output.push("Command Error")
            }
        }
        Output.push("")
    }
    return Output
}

function wordWrap(str, maxWidth) {
    var newLineStr = "\n"; done = false; res = '';
    while (str.length > maxWidth) {                 
        found = false;
        // Inserts new line at first whitespace of the line
        for (i = maxWidth - 1; i >= 0; i--) {
            if (testWhite(str.charAt(i))) {
                res = res + [str.slice(0, i), newLineStr].join('');
                str = str.slice(i + 1);
                found = true;
                break;
            }
        }
        // Inserts new line at maxWidth position, the word is too long to wrap
        if (!found) {
            res += [str.slice(0, maxWidth), newLineStr].join('');
            str = str.slice(maxWidth);
        }

    }
    return res + str;
}
function testWhite(x) {
    var white = new RegExp(/^\s$/);
    return white.test(x.charAt(0));
};

function Display(TextRAW,LineX,LineY) {
    Output = ""
    LineLen = 0
    Output += wordWrap(TextRAW[0],LineX)
    Output += "\n"
    if (TextRAW.length > 0) {
        for (i = 1; i < TextRAW.length; i++) {
            Output += '-'.repeat(LineX)
            Output += "\n"
            Output += wordWrap(TextRAW[i],LineX)
            Output += "\n"
        }
    }
    return Output.split("\n").slice(0-LineY).join("\n")+ "_"
}