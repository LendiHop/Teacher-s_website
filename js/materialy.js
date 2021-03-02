document.addEventListener("mousemove",
	function(e){
	let body = document.querySelector('body');
	let snow = document.createElement('span');
	let x = e.offsetX;
	let y = e.offsetY;
	snow.style.left = x+'px';
	snow.style.top = y+'px';
	let size = Math.random()*60;
	snow.style.width = 20+size+'px';
	snow.style.height = 20+size+'px';
	body.appendChild(snow);
	setTimeout(function(){
		snow.remove();
	},1800);
})
