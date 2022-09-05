const popUp = document.querySelector('.hidden-villa-info-wrapper');
const villaBtn = document.querySelector('.villa-link');
const closeBtn = document.querySelector('.close-btn');
const popupContainer = document.querySelector('.hidden-villa-info');

villaBtn.addEventListener('click', event => {
    event.preventDefault();
    popUp.classList.remove('hidden');
});

closeBtn.addEventListener('click', event => {
    event.preventDefault();
    popUp.classList.add('hidden');
});

popUp.addEventListener('click', event => {
    event.preventDefault();
    if (event.target == popUp) {
        popUp.classList.add('hidden');
    }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


const mainPriceButtonBlock = document.querySelector('.main-price-button-wrapper');

const villaCards = document.querySelectorAll('.custom-villa-card');
const mainPrice = document.querySelector('.main-price');
const villaNameContainer = document.querySelector('.villa-link');

const priceList = [];
for (let i = 0; i < villaCards.length; i++) {
    priceList.push(Math.floor(Math.random() * (2000 - 100 + 1) + 100));
}

villaCards.forEach((card, index) => {
    card.addEventListener('mouseenter', event => {
        for (currentCard of villaCards) {
            currentCard.classList.remove('selected-card');
        }
        card.classList.add('selected-card');
        villaNameContainer.innerHTML = event.target.querySelector('.st-link').innerHTML + '<br><span>Breakfast only</span>';
        mainPrice.innerHTML = `<strong>£${priceList[index]}</strong>`;
        if (card.classList.contains('sold-out')) {
            mainPriceButtonBlock.innerHTML = `<h5 style="text-align: center; color: rgb(255, 101, 74); font-size: 18px;"
                class="secure-now">
                SOLD OUT! <br>Please, check other dates</h5>`;
        } else {
            mainPriceButtonBlock.innerHTML = `<a href="#" class="btn-show-price btn btn-primary upper mt5 book-btn-custom"
            style="background-color: #ff7701; visibility: visible !important;">Book
            Now</a>`;
        }
    });
});

const villasContainer = document.querySelector('.container-villas');

window.addEventListener('scroll', event => {
    if ((villaNameContainer.offsetTop + 1000) > pageYOffset) {
        mainPriceButtonBlock.innerHTML = `<a href="#" class="btn-show-price btn btn-primary upper mt5 book-btn-custom"
        style="background-color: #ff7701; visibility: visible !important;">View villas</a>`;
    }
    else {
        mainPriceButtonBlock.innerHTML = `<a href="#" class="btn-show-price btn btn-primary upper mt5 book-btn-custom"
            style="background-color: #ff7701; visibility: visible !important;">Book
            Now</a>`;
    }
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


const villaCardList = document.querySelectorAll('.custom-villa-card');
const villaImages = document.querySelectorAll('.villa-image');

villaImages.forEach((villaImage, index) => {
    villaImage.style.height = villaCardList[index].clientHeight + "px";
});


const searchBlock = document.querySelector('.search-wrap-container');
const searchWindow = document.querySelector('.custom-search-wrap');
let sticky = searchBlock.offsetTop;


window.addEventListener('scroll', event => {
    if (window.pageYOffset > sticky) {
        searchBlock.classList.add('sticky-search');
        searchWindow.classList.add('noborder');
    } else {
        searchBlock.classList.remove('sticky-search');
        searchWindow.classList.remove('noborder');
    }
});

