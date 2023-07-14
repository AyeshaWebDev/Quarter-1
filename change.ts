let mag:string[] = ["ali","J.T","waseem","saeed"];

function make_greate(mag:string[]):string[]{
for(let u = 0; u<mag.length; u++){
   mag[u] = `the Great ${mag[u]}`;
}
return mag;
}

 let changed_Mag:string[] = make_greate([...mag]);


 function show(mag:string[]):void{
    for(let i of mag){
    console.log(i);
 }
}

show(mag);
show(changed_Mag);

