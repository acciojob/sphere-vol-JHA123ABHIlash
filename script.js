function volume_sphere() {
    //Write your code here
	event.preventDefault();
	
	let r=Number(document.getElementById("radius").value);
	let vol = (4/3) * Math.PI * Math.pow(r, 3);
	document.getElementById("volume").value=vol;
  
};

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
