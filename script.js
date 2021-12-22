let welcomeRadios = document.querySelectorAll('.welcome-radio')
let welcomeCells = document.querySelectorAll('.welcome-carousel-cell')
let modal = document.querySelector('.modal')
let modalBtn = document.querySelector('#booking-btn')
let submitBtn = document.querySelector('#submit-modal')
var closeModal = document.querySelector('.close-modal')

for (let index = 0; index < welcomeRadios.length; index++) {
    welcomeRadios[index].addEventListener('change', () => {
        for (let index = 0; index < welcomeRadios.length; index++) {
            if (welcomeRadios[index].checked == true) {
                welcomeCells[index].classList.remove('unchecked-carousel-cell')
                welcomeCells[index].classList.add('checked-carousel-cell')
            }
            else {
                welcomeRadios[index].checked = false
                welcomeCells[index].classList.remove('checked-carousel-cell')
                welcomeCells[index].classList.add('unchecked-carousel-cell')
            }
        }
    })

    welcomeCells[index].addEventListener('click', () => {
        for (let index = 0; index < welcomeRadios.length; index++) {
            welcomeRadios[index].checked = false
            welcomeCells[index].classList.add('unchecked-carousel-cell')
            welcomeCells[index].classList.remove('checked-carousel-cell')
        }
        welcomeRadios[index].checked = true
        welcomeCells[index].classList.remove('unchecked-carousel-cell')
        welcomeCells[index].classList.add('checked-carousel-cell')
    })
}



modalBtn.onclick = function () {
    modal.style.display = "block";
}

closeModal.onclick = function () {
    modal.style.display = "none";
}

submitBtn.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}