var usernames = ["admin", "J.T", "Ali", "Saeed", "waseem", "Rida"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var i = usernames_1[_i];
    if (i == 'admin') {
        console.log("Hello admin ,would you like to see a status report");
    }
    else {
        console.log("Hello ".concat(i, " thank you for logging again "));
    }
}
