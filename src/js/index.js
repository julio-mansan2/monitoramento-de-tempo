const weeklyInput = document.getElementById('weekly')
const dailyInput = document.getElementById('daily')
const monthlyInput = document.getElementById('monthly')
const weekStats = document.querySelectorAll('.weekly')
const dayStats = document.querySelectorAll('.daily')
const monthStats = document.querySelectorAll('.monthly')
const dailyLabel = document.querySelector('.daily-label')
const weeklyLabel = document.querySelector('.weekly-label')
const monthlyLabel = document.querySelector('.monthly-label')

dailyInput.addEventListener('click', function () {
    for (let i = 0; i < dayStats.length; i++) {
        if (dailyInput.checked) {
            dayStats[i].classList.add('selecionado')
            weekStats[i].classList.remove('selecionado')
            monthStats[i].classList.remove('selecionado')
            dailyLabel.classList.add('checked')
            weeklyLabel.classList.remove('checked')
            monthlyLabel.classList.remove('checked')
        }
    }
})

weeklyInput.addEventListener('click', function () {
    for (let i = 0; i < weekStats.length; i++) {
        if (weeklyInput.checked) {
            dayStats[i].classList.remove('selecionado')
            weekStats[i].classList.add('selecionado')
            monthStats[i].classList.remove('selecionado')
            dailyLabel.classList.remove('checked')
            weeklyLabel.classList.add('checked')
            monthlyLabel.classList.remove('checked')
        }
    }
})

monthlyInput.addEventListener('click', function () {
    for (let i = 0; i < monthStats.length; i++) {
        if (monthlyInput.checked) {
            dayStats[i].classList.remove('selecionado')
            weekStats[i].classList.remove('selecionado')
            monthStats[i].classList.add('selecionado')
            dailyLabel.classList.remove('checked')
            weeklyLabel.classList.remove('checked')
            monthlyLabel.classList.add('checked')
        }
    }
})