function make_album(artist, title, track) {
    var obj = {
        artist: artist,
        title: title
    };
    if (track !== undefined) {
        obj.track = track;
    }
    return obj;
}
var album1 = make_album("Artist1", "Title1");
var album2 = make_album("Artist2", "Title2", 12);
var album3 = make_album("Artist3", "Title3", 20);
console.log(album1);
console.log(album2);
console.log(album3);
