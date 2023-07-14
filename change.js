var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var mag = ["ali", "J.T", "waseem", "saeed"];
function make_greate(mag) {
    for (var u = 0; u < mag.length; u++) {
        mag[u] = "the Great ".concat(mag[u]);
    }
    return mag;
}
var changed_Mag = make_greate(__spreadArray([], mag, true));
function show(mag) {
    for (var _i = 0, mag_1 = mag; _i < mag_1.length; _i++) {
        var i = mag_1[_i];
        console.log(i);
    }
}
show(mag);
show(changed_Mag);
