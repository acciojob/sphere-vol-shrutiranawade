function volume_sphere() {
    //Write your code here
	let item = document.getElementById("radius").value;

  let volume1 = 4/3 * Math.PI * Math.pow(Number(item),3)
   console.log(volume1)
	document.getElementById("volume").value = volume1;
console.log(document.getElementById("volume"))
	
	//console.log(volume);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
