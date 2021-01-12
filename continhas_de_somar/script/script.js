const btnChecaResultado = document.getElementById('btnResultado');
const lista = document.getElementById('contas');

const listaIdCheck = [];
let listaRespostaCerta = [];
let listaRespostaUsuario = [];
// let indice = process.hrtime()[1];node.js somente servidor

const indice = () => {
	const hoje = new Date();
	const randomico = Math.random();
	const randomicoStr = randomico.toString();
	const randomicoStr2 = randomicoStr.substr(
		randomicoStr.length - 8,
		randomicoStr.length - 1
	);
	const numeradorIndice = hoje.getTime() * parseInt(randomicoStr2);
	return numeradorIndice;
};

const resultadoSoma = (n1, n2) => {
	return n1 + n2;
};

const criaLinha = (n1, n2) => {
	const linha = document.createElement('li');
	lista.appendChild(linha);
	criaPergunta(n1, n2, linha);
	criaInput(linha);
	criaDivCheck(linha);
};

const criaPergunta = (n1, n2, elementoPai) => {
	const alinhamento = document.createElement('div');
	elementoPai.appendChild(alinhamento);
	alinhamento.innerHTML = n1 + ' + ' + n2 + ' = ';
	alinhamento.className = 'colunm';
};

const criaInput = (elementoPai) => {
	const resposta = document.createElement('input');
	elementoPai.appendChild(resposta);
	resposta.type = 'number';
	resposta.min = '0';
	resposta.max = '99';
	resposta.className = 'colunm';
};

const criaDivCheck = (elementoPai) => {
	const imgcheck = document.createElement('div');
	elementoPai.appendChild(imgcheck);
	imgcheck.className = 'check colunm';
	imgcheck.id = indice();
	listaIdCheck.push(imgcheck.getAttribute('id'));
};

const listaResultado = (resultado) => {
	listaRespostaCerta.push(resultado);
};

let i = 0;
let soma = 0;
let n1 = Math.floor(Math.random() * 50);
let n2 = Math.floor(Math.random() * 50);
do {
	n1 = Math.floor(Math.random() * 50);
	n2 = Math.floor(Math.random() * 50);
	criaLinha(n1, n2);
	listaResultado(resultadoSoma(n1, n2));
	i++;
} while (n1 + n2 < 99 && i < 10);

let pegaRespostas = () => {
	const respostaUsuario = document.querySelectorAll('input');
	for (let i = 0; i < respostaUsuario.length; i += 1) {
		listaRespostaUsuario.push(respostaUsuario[i].value);
	}
};

const checaResultado = () => {
	listaRespostaUsuario = [];
	let i = 0;
	pegaRespostas();
	while (i < 10) {
		if (listaRespostaCerta[i] == listaRespostaUsuario[i]) {
			okCheck(i);
			i++;
		} else {
			noCheck(i);
			i++;
		}
	}
};

const okCheck = (index) => {
	const pegaCheck = document.getElementById(listaIdCheck[index]);
	pegaCheck.className = 'check colunm fa fa-check';
};

const noCheck = (index) => {
	const pegaCheck = document.getElementById(listaIdCheck[index]);
	pegaCheck.className = 'check colunm fa fa-times';
};

btnChecaResultado.addEventListener('click', checaResultado);
