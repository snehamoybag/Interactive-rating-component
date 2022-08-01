const SUBMIT_BTN = document.querySelector('.submit-btn');

// SUBMIT BUTTON EVENT LISTENER
SUBMIT_BTN.addEventListener("click", ()=> {
  const RATING = document.querySelector('input[name="ratings"]:checked');
  
  if (RATING) {
		  document.querySelector('.card-wrapper').classList.add('hidden');
		  
		  document.querySelector('.thankyou-wrapper').classList.remove('hidden');
		  
		  document.querySelector('.thankyou-rating').textContent = `You selected ${RATING.value} out of 5`;
  }
		
});
