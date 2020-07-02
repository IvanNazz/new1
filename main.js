const cardButton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const close =document.querySelector('.close');

function togleModal () {
    modal.classList.toggle('is-open');
}
cardButton.addEventListener('click', togleModal );
close.addEventListener('click', togleModal);

