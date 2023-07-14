const usernames:string[] = ["admin","J.T","Ali","Saeed","waseem","Rida"];

for(let i of usernames){

  if(i == 'admin'){
  console.log(`Hello admin ,would you like to see a status report`);
  }

  else{
    console.log(`Hello ${i} thank you for logging in again `)
  }

}
