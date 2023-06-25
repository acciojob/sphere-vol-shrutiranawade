function volume_sphere() {
    //Write your code here
	let radius = document.getElementById('radius').value;

  let volume1 = 4/3 * Math.PI * Math.pow(Number(radius),3)
   console.log(volume1)
	document.getElementById('volume').value = volume1;
console.log(document.getElementById('volume'))
	
	//console.log(volume);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
