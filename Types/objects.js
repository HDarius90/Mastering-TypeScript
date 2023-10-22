function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Darius", last: "Hadjati" });
// let coordinate: { x: number; y: number } = {
//   x: 35,
//   y: 2,
// };
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }
// printName({ first: "Mick", last: "Jagger", age: 473 });
var singer = { first: "Mick", last: "Jagger", age: 473, isAllive: true };
printName(singer);
// Type Aliases
var coordinate = {
    x: 35,
    y: 2,
};
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 32;
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Sweet Child O' Mine",
    artist: "Guns N’ Roses",
    numStreams: 1000000000,
    credits: {
        producer: "Mike Clink",
        writer: "Guns N' Roses",
    },
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
