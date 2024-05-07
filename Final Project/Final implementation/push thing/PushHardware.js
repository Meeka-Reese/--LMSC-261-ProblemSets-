let Push_Play = 0x55;
let Push_Met = 0x09;
let Push_Rec = 0x56;
function PushHardware (outputPort, inputPort, inputCallback)
{
    this.portOut = outputPort;
    this.portIn = inputPort;
    this.portIn.setMidiCallback (inputCallback);
    noteIn = inputPort.createNoteInput("Push 2", "8?????", "9?????", "B?01??", "B?40??", "D?????", "E?????");
    this.ledCache = initArray (-1, 128);
   

}

PushHardware.prototype.updateLED = function (note, isOn)
{
    let newNote = note - 20;
    
    var value = isOn ? 127 : 0;
    if (this.ledCache[newNote] != value)
    {
        this.ledCache[newNote] = value;
        this.portOut.sendMidi (0x90, newNote, value);
        println ("Updated to " + this.ledCache[note]);
    }
    else
        println ("Not updated.");
    
}