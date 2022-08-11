// Gathering elements to manaipulate
const submit = document.querySelector('#submit')
const rating = document.querySelector('.ratingContainer')
const completeRating = document.querySelector('.completedRating');
const again = document.querySelector('#again');
const value = document.getElementById('buttonValue');
const number = document.querySelectorAll('.numbers');

//on submit button click, hide rate start container and show completed rating container
submit.addEventListener('click', () => {
  completeRating.classList.toggle('hide');
  rating.classList.toggle('hide');
})

//on rate agaon button click, hide completed rating container and show start rating container
again.addEventListener('click', () => {
  rating.classList.toggle('hide');
  completeRating.classList.toggle('hide');
})

//whenever a button is clicked run a function that will put the html of that button into the text for the completed rating container span.
number.forEach((numb) => {
  numb.addEventListener('click', () => {
    value.innerHTML = numb.innerHTML;
  })
})