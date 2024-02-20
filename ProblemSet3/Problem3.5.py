Bpm = input("Whats the Bpm of the Song? ")
Bpm = int(Bpm)
SongLen = input("How Long in Seconds is The Song? ")
SongLen = int(SongLen)
index  = 1
Bps = Bpm / 60
while index <= SongLen:
    print("At second ", index, "total beats:", (Bps * index))
    index += 1