//your JS code here. If required.

document.addEventListener("DOMContentLoaded",callme)

function callme(){

let getbtn= document.getElementById("removeButton");
document.addEventListner("click", removeitem);

function removeitem(){
	let getitem= document.getElementById("colorSelect");
	const selectedindex=getitem.selectedindex;
	if(selectedindex!== -1){
		getitem.remove(selectedindex);
	}
}
}
