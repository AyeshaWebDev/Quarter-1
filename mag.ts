let magicians:string[] = ["J.T","Saeed","Waseem","Noor"];
 function make_great(magicians:string[]):void{
  for(let i = 0; i<magicians.length; i++){
  magicians[i] = `the Great ${magicians[i]}`;
  }
} 

function show_magician(magicians:string[]):void{
for(let i of magicians){
    console.log(i);
}
}

make_great(magicians);
show_magician(magicians);