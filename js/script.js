let slider = document.querySelectorAll('.slider_item');
let sliderInput = document.querySelectorAll('.slider > input');

for (let element of sliderInput) {
  element.addEventListener('change', (event) => {
    const num = event.target.dataset.num;
    for (let elem of slider) {
      elem.classList.add('visually-hidden');
    }

    document.querySelector('.slider_item:nth-child('+num+')').classList.remove('visually-hidden');
  });
}
