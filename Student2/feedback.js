const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const reactionInputs = document.getElementsByName('reaction');

const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.navLinks')


window.addEventListener('scroll', () => {
    if (this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (nameInput.value.trim() === '') {
        alert('Name field is required');
        return;
    }

    // Validate email field
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
    }

    // Validate at least one reaction is selected
    let reactionChecked = false;
    for (let i = 0; i < reactionInputs.length; i++) {
        if (reactionInputs[i].checked) {
          reactionChecked = true;
          break;
        }
    }
    if (!reactionChecked) {
        alert('Please rate your experience');
        return;
    }

    // Submit the form if all fields are valid
    form.submit();
});
