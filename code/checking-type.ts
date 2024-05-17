let movieCount = 0
let songCount = 0

for (const item of library) {
    if (item instanceof Movie) {
        movieCount++
    } else if (item instanceof Song) {
        songCount++
    }
}