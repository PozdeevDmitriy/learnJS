let btn = document.querySelector('.btn'),
	backgr = document.querySelector('.box');

function anymation() {
	let circle = document.querySelector('.circle'),

		pos = 0,
		id = setInterval(frame, 1);
	function frame() {
		if (pos == 600) {
			clearInterval(id);
		} else {
			pos++;
			circle.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', anymation);