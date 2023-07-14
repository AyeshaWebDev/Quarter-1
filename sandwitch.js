function sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwitch summary");
    console.log("Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var i = items_1[_a];
        console.log(i);
    }
    console.log("Sandwitch is ready");
}
sandwitch("tomato", "cheeses", "pumpkin");
sandwitch("tomato", "cheeze");
sandwitch("tomato", "meat", "pickels");
