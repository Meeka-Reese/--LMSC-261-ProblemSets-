SongDuration = input("What's the song duration in seconds?")
SongMin = int(SongDuration) // 60
SongSec = int(SongDuration) % 60
print("The song duration is", SongMin , "Minutes and ", SongSec , "Seconds long")

