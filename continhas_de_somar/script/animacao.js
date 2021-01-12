const quadroAnimacao = document.getElementById('animacao');

const idle = [
	'Idle/idle01.png',
	'Idle/idle02.png',
	'Idle/idle03.png',
	'Idle/idle04.png',
	'Idle/idle05.png',
	'Idle/idle06.png',
	'Idle/idle07.png',
	'Idle/idle08.png',
	'Idle/idle09.png',
	'Idle/idle10.png',
	'Idle/idle11.png',
	'Idle/idle12.png',
	'Idle/idle13.png',
	'Idle/idle14.png',
	'Idle/idle15.png',
	'Idle/idle16.png',
];
let index = 0;

const frame = () => {
	if (index == 16) {
		index = 0;
		quadroAnimacao.style.backgroundImage = `url(${idle[index]})`;
	} else {
		quadroAnimacao.style.backgroundImage = `url(${idle[index]})`;
		index += 1;
	}
};

const animacao = () => {
	setInterval(frame, 40);
};

animacao();
