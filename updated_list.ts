let GuestList:string[] = ["saeed","J.T","Ali"];

for(let z = 0; z<GuestList.length; z++){
    console.log(`Dear "${GuestList[z]}" ,you are cordially invited to a good dinner `);
}

// Due to any reason Ali can't make the dinner so replace Ali
let index_replace:number = 2;
let newguest:string = "Hamna";
GuestList[index_replace] = newguest;
console.log(`as ${GuestList[2]} can't make the dinner`);

for(let z = 0; z<GuestList.length; z++){
    console.log(`Dear "${GuestList[z]}" ,you are cordially invited to a delightful dinner `);
}