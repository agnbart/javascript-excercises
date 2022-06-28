const base = document.querySelector('.base')
const divLa = document.querySelector('.divLa')
const signLa = document.querySelector('.signLa')
const divLu = document.querySelector('.divLu')
const signLu = document.querySelector('.signLu')
const divAutumn = document.querySelector('.divAutumn')
const signAutumn = document.querySelector('.signAutumn')

const imgLa = document.createElement('img')
const imgLu = document.createElement('img')
const imgAutumn = document.createElement('img')

divLa.append(imgLa)
imgLa.setAttribute('src','./la.jpg')
imgLa.setAttribute('alt','lavenda')

const laIn = () => {
    if (signLa.textContent == '') {
        signLa.textContent = 'Titoktudo LAVENDA'
    } 
}
const laOut = () => {
    if (signLa.textContent !== '') {
        signLa.textContent = ''
    } 
}

imgLa.addEventListener('mouseenter',laIn)
imgLa.addEventListener('mouseleave',laOut)


divLu.append(imgLu)
imgLu.setAttribute('src','./lu.jpg')
imgLu.setAttribute('alt','lukrecia')

const luIn = () => {
    if (signLu.textContent == '') {
        signLu.textContent = 'Titoktudo LUKRECIA'
    } 
}
const luOut = () => {
    if (signLu.textContent !== '') {
        signLu.textContent = ''
    } 
}

imgLu.addEventListener('mouseenter',luIn)
imgLu.addEventListener('mouseleave',luOut)


divAutumn.append(imgAutumn)
imgAutumn.setAttribute('src','./autumn.jpg')
imgAutumn.setAttribute('alt','autumn')

const autumnIn = () => {
    if (signAutumn.textContent == '') {
        signAutumn.textContent = 'autumn'
    } 
}
const autumnOut = () => {
    if (signAutumn.textContent !== '') {
        signAutumn.textContent = ''
    } 
}

imgAutumn.addEventListener('mouseenter',autumnIn)
imgAutumn.addEventListener('mouseleave',autumnOut)