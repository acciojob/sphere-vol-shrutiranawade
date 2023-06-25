function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let item = parseFloat(document.getElementById('radius').value);
  let vol = document.getElementById('volume');
  vol.inputMode.value = none;
	let result =  4/3 * Math.PI*item *item*item;
  console.log(result);

	vol.value = result.toFixed(2);
	} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
