const today = new Date();

const date = ['sun', 'mon', 'tue', 'wen', 'thu', 'fri', 'sat']

document.querySelector('.year_month').textContent = `${today.getFullYear()}.${today.getMonth()+1}`

const previous = document.querySelector('.previous_month')

previous.addEventListener('click', function(){
    let year_month = document.querySelector('.year_month').textContent.split('.')
    let previous = new Date(year_month[0], year_month[1])
    document.querySelector('.year_month').textContent = `${year_month[0]}.${year_month[1]-1}`
})

const next = document.querySelector('.next_month')

next.addEventListener('click', function(){
    let year_month = document.querySelector('.year_month').textContent.split('.')
    document.querySelector('.year_month').textContent = `${year_month[0]}.${parseInt(year_month[1])+1}`
})

for(let i = 1; i<32; i++){
    let year_month = document.querySelector('.year_month').textContent.split('.')
    let new_date = new Date(year_month[0], year_month[1]-1, i)
    document.querySelector('.week').insertAdjacentHTML('beforeend', `<li class="${date[new_date.getDay()]} date">${new_date.getDate()}</li>`)
}