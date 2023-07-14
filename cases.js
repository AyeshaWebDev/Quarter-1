var b = "Jahanzaib Tayyab";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
function titlecase(c) {
    var sentence = c.toLowerCase().split(' ');
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(' ');
}
console.log(titlecase("jahanzaib tayyab"));
