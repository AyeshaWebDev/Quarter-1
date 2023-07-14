let guestlist:string[] = ["Ayza","Noor","J.T","saeed","Kinza"];
console.log(`Good News! We found a bigger Table.`)
guestlist.unshift("Adil");

let middle:number = Math.floor(guestlist.length/2);
guestlist.splice(middle,0,"Ahsan");

guestlist.push("Sania");

for(let i = 0; i<guestlist.length; i++){
    console.log(`Dear ${guestlist[i]} you are cordially invited to a dinner party`);
}