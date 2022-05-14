// THANK YOU TEMPLATE
const thanksTemplate = `
						<div class="thankyou-wrapper">				
								<img class="thankyou-illustration" src="images/illustration-thank-you.svg" alt="thankyou illustration image">				
								<div class="thankyou-rating">
  								You selected 4 out of 5
  						</div>	
  						<h1 class="thankyou-header">Thank you!</h1>
  						<p class="thankyou-paragraph">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
						</div>
`;
const submitButtonEl = document.querySelector(".submit-btn");

// SUBMIT BUTTON EVENT LISTENER
submitButtonEl.addEventListener("click",
		function () {
		const interactiveCardEl = document.querySelector(".interactive-card");
		const ratingEl = document.querySelector('input[name="ratings"]:checked');
		if (ratingEl) {
		// RENDERING THE THANKS MESSAGE TEMPLATE
		interactiveCardEl.innerHTML = thanksTemplate;
		// RENDERING THE RATING VALUE INSIDE OF THE THANKS MESSAGE TEMPLATE
		document.querySelector(".thankyou-rating").textContent = `You selected ${ratingEl.value} out of 5`
		}
})
