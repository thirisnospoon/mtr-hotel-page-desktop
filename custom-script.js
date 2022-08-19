const popUp = document.querySelector('.hidden-villa-info-wrapper');
const villaBtn = document.querySelector('.villa-link');
const closeBtn = document.querySelector('.close-btn');
const popupContainer = document.querySelector('.hidden-villa-info');

// villaBtn.addEventListener('click', event => {
//     event.preventDefault();
//     popUp.classList.remove('hidden');
// });

// closeBtn.addEventListener('click', event => {
//     event.preventDefault();
//     popUp.classList.add('hidden');
// });

// popUp.addEventListener('click', event => {
//     event.preventDefault();
//     if (event.target == popUp) {
//         popUp.classList.add('hidden');
//     }
// });



const villaCards = document.querySelectorAll('.custom-villa-card');

villaCards.forEach((card, index) => {
    card.addEventListener('mouseover', event => {
       
        for (currentCard of villaCards) {
            currentCard.classList.remove('selected-card');
        }
    
        card.classList.add('selected-card');
    });
});

// window.addEventListener('scroll', event => {
//     for (let i = 0; i < bookButtons.length; i++) {
//         if (!isInViewport(bookButtons[i])) {
//             bookButtons[i].style.visibility = 'hidden';
//             bookButtons[i + 1].style.visibility = 'visible';
//         }
//         else {
//             for (n = i + 1; n < bookButtons.length; n++) {
//                 bookButtons[n].style.visibility = 'hidden';
//             }
//         }
//     }


// });

// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }


// const priceList = [{
//         'All Inclusive': 3300,
//         'Half Board': 3600,
//         'All Disclusive': 4200
//     },
//     {
        
//         'Half Board': 3600,
//         'All Disclusive': 4200
//     }

// ];

// const actualPrice = document.querySelector('.actual-villa-price');
// const radioPriceForm = document.querySelector('.radio-price-form');

// priceList.forEach(priceElement => {
//     radioPriceForm.innerHTML += `<div class="radio-price-item">
//                                     <div class="radio-price-button">
//                                         <input style="margin-right: 2px;" name="meals" id="radio-1" type="radio" value="${priceElement.}">
//                                         <label for="radio-1" class="radio-label"><span class="meal-type-text">All Inclusive</span></label>
//                                     </div>
//                                     <p class="additional-price">Included</p>
//                                 </div>`
// });
// radioPriceForm.innerHTML += 


const villaCardList = document.querySelectorAll('.custom-villa-card');
const villaImages = document.querySelectorAll('.villa-image');

villaImages.forEach((villaImage, index) => {
    villaImage.style.height = villaCardList[index].clientHeight + "px";
});


