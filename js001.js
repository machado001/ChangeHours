const showDate = new Date()
const showOnlyHours = showDate.getHours()
const showOnlyMinutes = showDate.getMinutes()
let insertSpan = function () {
    return setInterval(() => document.querySelector('span').innerHTML = `${showOnlyHours}:${showOnlyMinutes}`, 1000)
}
window.addEventListener('DOMContentLoaded', insertSpan)

const c = () => {
    if (showOnlyHours >= 6 && showOnlyHours <= 12) {
        //condição para estar de manhã
        showHTML('#0fd2e2', 'Bom dia!', 'https://www.colunatech.com.br/wp-content/uploads/2021/08/one-peace-1.jpg')

    } else if (showOnlyHours > 12 && showOnlyHours < 18) {
        //condição para estar de tarde
        showHTML('#e6a60f', 'Tardezinha boa!', 'https://criticalhits.com.br/wp-content/uploads/2021/06/0896cd12e66c175047dea1f0aba7d182-910x512.jpg')

    } else if (showOnlyHours => 18 && showOnlyHours <= 24) {
        //condição para estar de noite
        showHTML('#2d2929', 'A note chegou!', 'https://criticalhits.com.br/?attachment_id=208749')

    } else if (showOnlyHours >= 0 && showOnlyHours <= 6) {
        //condição para estar de madrugada
        a('#2d2626', 'Madruga, vai ficar até tarde mais uma vez?', 'https://static.wixstatic.com/media/1f8f2a_e63789c40dbd4d05999ccdeaa222ccda~mv2.png/v1/fit/w_720%2Ch_480%2Cal_c/file.png')
    }
}
document.addEventListener('DOMContentLoaded', c)

function showHTML(color, text, img) {
    setBGColor = document.querySelector('body').style.backgroundColor = color
    showParagraph = document.querySelector('#result').innerHTML = text
    setImage = document.querySelector('img').src = img
}
