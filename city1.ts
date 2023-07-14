let city_country = (city:string,country:string):string =>{
    return `"${city} , ${country}"`;
}

let k:string = city_country(`Lahore`,`Pakistan`);
console.log(k);

let y:string = city_country(`Bombay`,`India`);
console.log(y);

let x:string = city_country(`Paris`,`Europe`);
console.log(x);