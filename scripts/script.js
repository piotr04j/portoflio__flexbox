window.onload = function () {
	var hamburger = document.getElementById('btn-hamburger'),
		menu = document.querySelector('.responsive__menu'),
		icon = document.getElementById('menu__icon');
	
	hamburger.addEventListener('click', function (){
		if (menu.style.display === 'none'){
			menu.style.display = 'block';
			icon.classList.remove('ion-navicon-round');
			icon.classList.add('ion-close-round');
			
		} else {
			menu.style.display = 'none';
			icon.classList.remove('ion-close-round');
			icon.classList.add('ion-navicon-round');
		}
		
	});
	
};

