// s1 outfit
let s1 = document.querySelector('#s1');
/* the process: */
s1.addEventListener('click', function() {
	// Hide #body
	document.querySelector('#body').style.display = 'none';
	
	// Hide all outfit images
	let outfits = document.querySelectorAll('.outfit');
	for (let i = 0; i < outfits.length; i++) {
	  outfits[i].style.display = 'none';
	}
	
	// Show #o1 outfit
	document.querySelector('#o1').style.display = 'block';
  });
  

  let s2 = document.querySelector('#s2');
  /* the process: */
  s2.addEventListener('click', function() {
	  // Hide #body
	  document.querySelector('#body').style.display = 'none';
	  
	  // Hide all outfit images
	  let outfits = document.querySelectorAll('.outfit');
	  for (let i = 0; i < outfits.length; i++) {
		outfits[i].style.display = 'none';
	  }
	  // Show #o1 outfit
	  document.querySelector('#o2').style.display = 'block';
	});



  let s3 = document.querySelector('#s3');
  /* the process: */
  s3.addEventListener('click', function() {
	  // Hide #body
	  document.querySelector('#body').style.display = 'none';
	  
	  // Hide all outfit images
	  let outfits = document.querySelectorAll('.outfit');
	  for (let i = 0; i < outfits.length; i++) {
		outfits[i].style.display = 'none';
	  }
	  // Show #o1 outfit
	  document.querySelector('#o3').style.display = 'block';
	});


	let s4 = document.querySelector('#s4');
	/* the process: */
	s4.addEventListener('click', function() {
		// Hide #body
		document.querySelector('#body').style.display = 'none';
		
		// Hide all outfit images
		let outfits = document.querySelectorAll('.outfit');
		for (let i = 0; i < outfits.length; i++) {
		  outfits[i].style.display = 'none';
		}
		// Show #o1 outfit
		document.querySelector('#o4').style.display = 'block';
	  });


	  let s5 = document.querySelector('#s5');
	  /* the process: */
	  s5.addEventListener('click', function() {
		  // Hide #body
		  document.querySelector('#body').style.display = 'none';
		  
		  // Hide all outfit images
		  let outfits = document.querySelectorAll('.outfit');
		  for (let i = 0; i < outfits.length; i++) {
			outfits[i].style.display = 'none';
		  }
		  // Show #o1 outfit
		  document.querySelector('#o5').style.display = 'block';
		});

// strip me button
let stripButton = document.querySelector('#strip-button');
stripButton.onclick = function() {
  // show #body
  document.querySelector('#body').style.display = 'block';
  
  // hide all outfits
  let outfits = document.querySelectorAll('.outfit');
  for (let i = 0; i < outfits.length; i++) {
    outfits[i].style.display = 'none';
  }
};
