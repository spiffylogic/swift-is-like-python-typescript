movieCount = 0
songCount = 0

for item in library:
    if isinstance(item, Movie):
        movieCount += 1
    elif isinstance(item, Song):
        songCount += 1
