var magicians = ["J.T", "Saeed", "Waseem", "Noor"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var i = magicians_1[_i];
        console.log(i);
    }
}
make_great(magicians);
show_magician(magicians);
