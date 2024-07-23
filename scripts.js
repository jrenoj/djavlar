let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	slides[slideIndex-1].style.display = "block";  
	setTimeout(showSlides, 7500); 
}

document.addEventListener("DOMContentLoaded", function() {
	if (window.location.hash) {
		var target = document.querySelector(window.location.hash);
		if (target) {
			setTimeout(function() {
				target.scrollIntoView({ behavior: 'smooth' });
			}, 100); // Delay to ensure the page is fully loaded
		}
	}
});


document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.toggle-overlay').forEach(img => {
        img.addEventListener('click', function() {
            const bioBox = this.parentElement;
            bioBox.classList.toggle('active');
        });
    });
});

