SongDur = input("How Long is your song?")
SongDur = int(SongDur)
if SongDur < 2:
    print("Short Song")
elif SongDur >= 2 and SongDur < 4:
    print("Medium Song")
elif SongDur >= 4:
    print("Long Song")

