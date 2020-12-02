const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });
t1.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
t1.to(".intro-slider", { y: "-100%", duration:1.25, delay: 0.75} );
t1.to(".intro", { y: "-100%", duration:1}, "-=1" );

var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");
var backgroundImg = new Array(
	"images/bg1.png",
	"images/bg2.png",
	"images/bg3.png",
	"images/bg4.png",
	"images/bg5.png",
);
let i=0;
next.onclick = function(){
	if (i < 4){
		hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
		thumbnail[i+1].classList.add("active");
		thumbnail[i].classList.remove("active");
		i++;
	}		
}
prev.onclick = function(){
	if (i > 0){
	    hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
		thumbnail[i-1].classList.add("active");
		thumbnail[i].classList.remove("active");
		i--;
	}		
}

