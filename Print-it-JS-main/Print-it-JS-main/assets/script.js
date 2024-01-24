const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const numberofslide = slides.length;

for (let i = 0; i < numberofslide; i++) {
	const bullet = document.createElement("p");
	if (i === 0) {
		bullet.classList.add('dot');
		bullet.classList.add('dot_selected');
	} else {
		bullet.classList.add('dot');
	}
	bullet.setAttribute("id", "bulletpoint"+ i);

	document.getElementById("dotslist").appendChild(bullet);
}


let positiondelimage = 0;


const chemindesimages = "./assets/images/slideshow/";
let arrowr = document.querySelector("#banner .arrow_right");
arrowr.addEventListener("click", function flecher() {
	//console.log("clic flèche droite")
	document.getElementById("bulletpoint" + positiondelimage).setAttribute("class", "dot");
	if (positiondelimage === numberofslide - 1) {
		positiondelimage = 0;
	} else {
		positiondelimage++
	}
	document.getElementById("bulletpoint" + positiondelimage).setAttribute("class", "dot dot_selected");
	let nomdelimage = slides[positiondelimage]["image"];
	let urldelimage = chemindesimages.concat(nomdelimage);
	document.getElementById("bannerimg").src = urldelimage;
	textimage = slides[positiondelimage]["tagLine"];
	document.getElementById("textimg").innerHTML = textimage;
})

let arrowl = document.querySelector("#banner .arrow_left");
arrowl.addEventListener("click", function flechel() {
	//console.log("clic flèche gauche")
	document.getElementById("bulletpoint" + positiondelimage).setAttribute("class", "dot");
	if (positiondelimage === 0) {
		positiondelimage = numberofslide -1;
	} else {
		positiondelimage--
	}
	document.getElementById("bulletpoint" + positiondelimage).setAttribute("class", "dot dot_selected");
	let nomdelimage = slides[positiondelimage]["image"];
	let urldelimage = chemindesimages.concat(nomdelimage);
	document.getElementById("bannerimg").src = urldelimage;
	textimage = slides[positiondelimage]["tagLine"];
	document.getElementById("textimg").innerHTML = textimage;


})
