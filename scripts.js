window.addEventListener('load', () => {
	// noinspection JSUnresolvedVariable
	let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'yahoo.mp3');
	xhr.responseType = 'arraybuffer';
	xhr.addEventListener('load', () => {
		let playsound = (audioBuffer) => {
			let source = audioCtx.createBufferSource();
			source.buffer = audioBuffer;
			source.connect(audioCtx.destination);
			source.loop = false;
			source.start();

			setTimeout(function () {
				playsound(audioBuffer);
			}, 1000 + Math.random()*2500);
		};

		audioCtx.decodeAudioData(xhr.response).then(playsound);
	});
	xhr.send();
});

var j = 100;

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

function changeMe() 
{
	document.getElementById("changeMe").style.backgroundSize= j + "% " + j + "%";
	console.log(j + 'vw');
	j = j + 0.1;
	setTimeout(function () {
		changeMe();
	}, 10);
}
changeMe();

var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");

if(
  isChromium !== null &&
  typeof isChromium !== "undefined"
) {
   document.getElementById("start").style.display = "flex";
} else {
   document.getElementById("start").style.display = "none";
}

var button = document.getElementById("start");
button.onclick = function() {
		// noinspection JSUnresolvedVariable
	let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'yahoo.mp3');
	xhr.responseType = 'arraybuffer';
	xhr.addEventListener('load', () => {
		let playsound = (audioBuffer) => {
			let source = audioCtx.createBufferSource();
			source.buffer = audioBuffer;
			source.connect(audioCtx.destination);
			source.loop = false;
			source.start();

			setTimeout(function () {
				playsound(audioBuffer);
			}, 1000 + Math.random()*2500);
		};

		audioCtx.decodeAudioData(xhr.response).then(playsound);
	});
	xhr.send();
}
