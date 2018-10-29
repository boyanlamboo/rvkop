const revealInstant = {
  origin: 'bottom',
  delay: 0,
	duration: 350,
  distance: '48px',
  easing: 'ease-in-out',
	reset: true,
};

const revealSecond = {
	origin: 'bottom',
	delay: 250,
	duration: 350,
	distance: '48px',
	easing: 'ease-in-out',
	reset: true,
}

const revealPhotoRight = {
	origin: 'right',
	delay: 250,
	duration: 350,
	distance: '48px',
	easing: 'ease-in-out',
	reset: true,
}

window.sr = ScrollReveal();
sr.reveal('.reveal-instant', revealInstant);
sr.reveal('.reveal-second', revealSecond);
sr.reveal('.reveal-photo-right', revealPhotoRight);
