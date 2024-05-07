loadAPI(18);
load("PushHardware.js");
host.setShouldFailOnDeprecatedUse(true);
host.defineController("ableton", "push thing", "0.1", "897b21e6-08e6-4db3-80a0-ffddeb919b4f", "Floating To The Surface");
host.defineMidiPorts(1, 1);
host.addDeviceNameBasedDiscoveryPair(["Input Port 0"], ["Output Port 0"]);


let Playing = false;

let transport = null;
let hardware = null;

function init() 
{
   hardware = new PushHardware (host.getMidiOutPort (0), host.getMidiInPort (0), onMidi0);
   
   println("push thing initialized!");
   transport = host.createTransport(); 
   
   transport.isPlaying ().addValueObserver (function (value)
   {
      println (value ? "Playing..." : "Stopped.");
      Playing = value;
   })
   
   
}


function onMidi0(status, data1, data2) 
{
   printMidi(status, data1, data2);
   
 

   if (isChannelController(status) && data2 == 127)
   {
      println("Process");

      switch (data1)
      {

         case Push_Play:
         
            if (Playing) 
            {
            transport.stop();
            
            host.showPopupNotification("Stop");
            } 
            else 
            {
             transport.play();
            
            host.showPopupNotification("Play");
            }
            break;
         
         

         
         case Push_Met:
            isMetronomeEnabled();
            host.showPopupNotification("Metronome On");
            break;

         case Push_Rec:
            transport.record ();
            host.showPopupNotification("Record");
            break;

         default:
            host.errorln ("Command " + data1 + "is not supported.");
            break;

      }
   }
}


function sayHello()
{
   host.showPopupNotification("Hello World");

}
function flush() 
{
   let isPlaying = transport.isPlaying ().get();
   hardware.updateLED (Push_Play, isPlaying);
   println("FlushCalled");
   // TODO: Flush any output to your controller here.
}

function exit() 
{

}