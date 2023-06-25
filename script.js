function volume_sphere() {
    //Write your code here
	let radius = document.getElementById('radius').value;
    let volume1;
	radius = Math.abs(radius);
  let volume1 = 4/3 * Math.PI * Math.pow(radius ,3)

	volume1 = volume.toFixed(4);
	document.getElementById('volume').value = volume1;

	return false;
	//console.log(volume);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
