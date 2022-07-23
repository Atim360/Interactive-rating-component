"use strict"

const form = document.querySelector('.radio-form')
const ratingComponent = document.querySelector('.rating-form')
const submitedComponent = document.querySelector('.rating-submited')
const selectedRatingVote = document.querySelector('.rating-submited__selected-rating-vote')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const rating = new FormData(form).get('rating-vote')
  selectedRatingVote.innerHTML = `You selected ${rating} out of 5`
  ratingComponent.classList.add('rating-component__item--hidden')
  submitedComponent.classList.remove('rating-component__item--hidden')
})