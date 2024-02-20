Midi = input("Give a Midi Value Between 1 and 127: ")
Midi = int(Midi)
if Midi < 1 or Midi > 127:
    print("Not a valid Midi Value")
    Midi = input("Give a Midi Value Between 1 and 127: ")
    Midi = int(Midi)

Freq = (2 ** ((Midi - 69) / 12)) * 440
print("The Frequency of", Midi, "Is", Freq, "Hz")
