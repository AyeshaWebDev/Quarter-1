var gUestlist = ["Ali", "J.T", "Neha", "Qamar", "Rida"];
console.log("Important Note! Due to unexpected circumstances Dinner Table will only accomodate two guests");
while (gUestlist.length > 2) {
    var removed = gUestlist.pop();
    console.log("Sorry ".concat(removed, " as i am not be able to invite you to the dinner"));
}
for (var i = 0; i < gUestlist.length; i++) {
    var guest = gUestlist[i];
    console.log("Dear  ".concat(guest, " you are still invited to the dinner  i look forward to seeing you"));
}
gUestlist.pop();
gUestlist.pop();
console.log(gUestlist);
