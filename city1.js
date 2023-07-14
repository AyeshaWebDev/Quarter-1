var city_country = function (city, country) {
    return "\"".concat(city, " , ").concat(country, "\"");
};
var k = city_country("Lahore", "Pakistan");
console.log(k);
var y = city_country("Bombay", "India");
console.log(y);
var x = city_country("Paris", "Europe");
console.log(x);
