var GuestList = ["saeed", "J.T", "Ali"];
for (var z = 0; z < GuestList.length; z++) {
    console.log("Dear \"".concat(GuestList[z], "\" ,you are cordially invited to a good dinner "));
}
// Due to any reason Ali can't make the dinner so replace Ali
var index_replace = 2;
var newguest = "Hamna";
GuestList[index_replace] = newguest;
console.log("as ".concat(GuestList[index_replace], " can't make the dinner"));
for (var z = 0; z < GuestList.length; z++) {
    console.log("Dear \"".concat(GuestList[z], "\" ,you are cordially invited to a delightful dinner "));
}
