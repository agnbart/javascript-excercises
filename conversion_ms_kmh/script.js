const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let kmH
let mS

const swap = () => {
    if (one.textContent === 'm/s') {
        one.textContent = 'km/h'
        two.textContent = 'm/s'
        result.textContent = ''
    } else {
        one.textContent = 'm/s'
        two.textContent = 'km/h'
        result.textContent = ''
    }
}

const convMtoKm = () => {
    kmH = converter.value * 3.6
    result.textContent = `${converter.value}m/s to ${kmH.toFixed(1)}km/h`
    converter.value = ''
}

const convKmtoM = () => {
    mS = converter.value/3.6
    result.textContent = `${converter.value}km/h to ${mS.toFixed(1)}m/s`
    converter.value = ''
}

const conversion = () => {
    if (converter.value !== '') {
        if (one.textContent === 'm/s') {
            convMtoKm()
        } else {
            convKmtoM()
        }
    } else {
        result.textContent('Musisz podać jakąś wartość!')
    }
}

const reset = () => {
    result.textContent = ''
    converter.value = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click',conversion)
resetBtn.addEventListener('click',reset)