function volume_sphere() {
    //Write your code here
	let radius = document.getElementById('radius').value;
    let volume;
	radius = Math.abs(radius);
  let volume = 4/3 * Math.PI * Math.pow(radius ,3)

	volume = volume.toFixed(4);
	document.getElementById('volume').value = volume;

	return false;
	//console.log(volume);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
