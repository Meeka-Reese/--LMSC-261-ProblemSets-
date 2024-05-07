let Push_Play = 0x55;
let Push_Met = 0x09;
let Push_Rec = 0x56;
//Push Transport Control
function PushHardware (outputPort, inputPort, inputCallback)
{
    this.portOut = outputPort;
    this.portIn = inputPort;
    this.portIn.setMidiCallback (inputCallback);
    noteIn = inputPort.createNoteInput("Push 2", "8?????", "9?????", "B?01??", "B?40??", "D?????", "E?????");
    this.ledCache = initArray (-1, 128);
    //Setting up ports for the push and filtering the inputs for "noteIn"
   

}

PushHardware.prototype.updateLED = function (note, isOn)
{
    let newNote = note - 30;
    
    var value = isOn ? 127 : 0;
    if (this.ledCache[newNote] != value)
    {
        this.ledCache[newNote] = value;
        this.portOut.sendMidi (0x90, newNote, value);
        println (newNote);
        // Sending Midi Notes back to Push to Trigger the Lights
        println ("Updated to " + this.ledCache[note]);
    }
    else
        println ("Not updated.");
    
}