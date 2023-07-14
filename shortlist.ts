let gUestlist:string[] = ["Ali","J.T","Neha","Qamar","Rida"];
console.log(`Important Note! Due to unexpected circumstances Dinner Table will only accomodate two guests`);
while(gUestlist.length>2){
let removed:string | undefined = gUestlist.pop();
console.log(`Sorry ${removed} as i am not be able to invite you to the dinner`);
}

for(let i = 0; i<gUestlist.length; i++){
    let guest = gUestlist[i];
    console.log(`Dear  ${guest} you are still invited to the dinner  i look forward to seeing you`);
}

gUestlist.pop();
gUestlist.pop();

console.log(gUestlist);