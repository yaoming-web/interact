(function () {
    const ratingElements = document.querySelectorAll('.rate-button .rate');
    const submitButton = document.querySelector('.submit-button');
    const ratingComponentElement = document.querySelector('.wrapper');
    const thankYouComponentElement = document.querySelector('.thank-you');

    let activeRatingElement = null;
    ratingElements.forEach(element => {element.addEventListener('click', setActiveRating);
});
submitButton.addEventListener('click', submitRating);

//Events
function setActiveRating(event) {
    if (activeRatingElement == null) {
        activeRatingElement = event.currentTarget;
    }
    else {
        activeRatingElement.classList.remove('active');
        activeRatingElement = event.currentTarget;
    }
    activeRatingElement.classList.add('active');
}

function submitRating(event) {
    ratingComponentElement.classList.remove('active');
    thankYouComponentElement.classList.add('active');
    const ratingSpanElement = document.querySelector('.selected-rating');
    ratingSpanElement.textContent = activeRatingElement.firstChild.textContent;
}

})();
