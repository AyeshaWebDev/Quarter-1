var guestlist = ["Ayza", "Noor", "J.T", "saeed", "Kinza"];
console.log("Good News! We found a bigger Table.");
guestlist.unshift("Adil");
var middle = Math.floor(guestlist.length / 2);
guestlist.splice(middle, 0, "Ahsan");
guestlist.push("Sania");
for (var i = 0; i < guestlist.length; i++) {
    console.log("Dear ".concat(guestlist[i], " you are cordially invited to a dinner party"));
}
