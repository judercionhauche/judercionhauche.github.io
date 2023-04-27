// 
// Part 1: Fill in the function unhideLightbox. Afterwards, we will make this function run when a picture is clicked on.
// 

/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	// Remove the .hidden class from the div with the given id
	document.getElementById(lightboxID).classList.remove('hidden');
}


//
// Part 2: Make the unhideLightbox function run when a picture is clicked on.
// 

/**
 * Calls unhideLightbox with the id of the first lightbox
 */
function unhideLightbox1() {
	// Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox
	unhideLightbox('doggo1');
}

// Set the browser to run the function unhideLightbox1 when someone clicks #picture-1
document.getElementById('picture-1').addEventListener('click', unhideLightbox1);


/**
 * Calls unhideLightbox with the id of the second lightbox
 */
function unhideLightbox2() {
	// Look in q2.html to see what the id for the lightbox div for the second picture, and call unhideLightbox
	unhideLightbox('doggo2');
}

// Set the browser to run the function unhideLightbox2 when someone clicks #picture-2
document.getElementById('picture-2').addEventListener('click', unhideLightbox2);


/**
 * Calls unhideLightbox with the id of the third lightbox
 */
function unhideLightbox3() {
	// Look in q2.html to see what the id for the lightbox div for the third picture, and call unhideLightbox
	unhideLightbox('doggo3');
}

// Set the browser to run the function unhideLightbox3 when someone clicks #picture-3
document.getElementById('picture-3').addEventListener('click', unhideLightbox3);


// 
// Part 3: Now we need to be able to close the lightbox when we click outside...
//

// This function hides the lightbox overlay and all of the lightbox pop-ups
function hideLightbox() {
	// Add the .hidden class back to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');

	// Add the .hidden class back to all of the divs with class .lightbox
	var lightboxes = document.querySelectorAll('.lightbox');
	for (var i = 0; i < lightboxes.length; i++) {
		lightboxes[i].classList.add('hidden');
	}
}

// Set the browser to run the function hideLightbox when someone clicks #lightbox-overlay
document.getElementById('lightbox-overlay').addEventListener('click', hideLightbox);
