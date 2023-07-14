
function make_album(artist:string,title:string,track?:number):object{
    let obj:{artist:string,title:string,track?:number} = {
        artist:artist,
        title:title
    }
if(track !== undefined){
obj.track = track;
}
return obj;
}
let album1:object = make_album("Artist1","Title1");
let album2:object = make_album("Artist2","Title2",12);
let album3:object = make_album("Artist3","Title3",20);

console.log(album1);
console.log(album2);
console.log(album3);