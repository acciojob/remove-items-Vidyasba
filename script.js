//your JS code here. If required.

let getbtn= document.getElementById("removeButton");
window.addEventlistner("click", removeitem());

function removeitem(){
	let getitem= document.getElementById("colorSelect");
	const selectedindex=getitem.selectedindex;
	if(selectedindex!== -1){
		getitem.remove(selectedindex);
	}
}
