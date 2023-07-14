let describe_city = (city:string,country:string = "Pakistan"):void => {
console.log(`${city} is in  ${country}`);

}

describe_city(`Karachi`,`Pakistan`);
describe_city(`Agra`,`india`);
describe_city(`ping pong`,`China`);