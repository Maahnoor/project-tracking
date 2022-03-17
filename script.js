const hamburger = document.getElementById('menu-btn');
const { body } = document;

hamburger.addEventListener('click', e => {
	body.classList.toggle('show-nav');
});