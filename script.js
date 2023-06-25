function volume_sphere() {
    //Write your code here
	let item = document.getElementById("radius").value;

  let volume1 =  Math.pow(Number(item),3)* 4/3 * Math.PI;
  // console.log(volume1);
	document.getElementById("volume").value = volume1;
//console.log(document.getElementById("volume"));
	} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
