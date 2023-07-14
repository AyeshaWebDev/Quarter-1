
function sandwitch(...items:string[]):void{
    console.log("Sandwitch summary");
    console.log("Bread");
for(let i of items){
console.log(i);
}
console.log("Sandwitch is ready")
}

sandwitch("tomato","cheeses","pumpkin");
sandwitch("butter","mayonaise");
sandwitch("tomato","meat","pickels");


