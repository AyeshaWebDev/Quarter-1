let users:string[] = ["admin","J.T","saeed","Rida","Noor"];

if(users.length === 0){
console.log(`We need to find some users`);
}
else{
    for(let i of users){
        if(i == 'admin'){
            console.log(`Hello admin ,would you like to see a status report`);
        }
        else{
            console.log(`Hello ${i} thank you for logging in again`);
        }
    }
}

users = [];
if(users.length === 0){
    console.log(`We need to find some users`)
}