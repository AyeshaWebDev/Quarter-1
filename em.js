var users = ["admin", "J.T", "saeed", "Rida", "Noor"];
if (users.length === 0) {
    console.log("We need to find some users");
}
else {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var i = users_1[_i];
        if (i == 'admin') {
            console.log("Hello admin ,would you like to see a status report");
        }
        else {
            console.log("Hello ".concat(i, " thank you for logging in again"));
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("We need to find some users");
}
